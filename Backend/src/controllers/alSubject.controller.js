const path = require('path');
const express = require('express');
const multer = require('multer');
const Subject = require('../models/alSubjects.model');
const Router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 10000000 // max file size 10MB = 10000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      if(!upload){
        const { olSubject, grade, classTime, ZoomLink } = req.body;
      const { path, mimetype } = req.file;
      const file = new Subject({
        olSubject,  
        grade, 
        classTime, 
        ZoomLink,
        file_path: path,
        file_mimetype: mimetype
      });
    await file.save();
    res.send('OL subject and Files uploaded successfully.');
    }else{
      const { olSubject, grade, classTime, ZoomLink } = req.body;
      const file = new Subject({
        olSubject,  
        grade, 
        classTime, 
        ZoomLink
      });
    await file.save();
    res.send('OL subject uploaded successfully.');
    }
    } catch (error) {
      res.status(400).send('Error while uploading subject. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);



Router.patch('/update/:id', (req, res) => {
  Subject.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((blog) => {
      if (!blog) {
          return res.status(404).send();
      }
      res.send(blog);
  }).catch((error) => {
      res.status(500).send(error);
  })
})

// Router.get('/getSubject', async (req, res) => {
//     try {
//       const files = await Subject.findById({_id: req.body._id});
//       const sortedByCreationDate = files.sort(
//         (a, b) => b.createdAt - a.createdAt
//       );
//       res.send(sortedByCreationDate);
//     } catch (error) {
//       res.status(400).send('Error while getting list of subjects. Try again later.');
//     }
//   });

Router.get('/getAllSubjects', async (req, res) => {
  try {
    const files = await Subject.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of subjects. Try again later.');
  }
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await Subject.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendSubject(path.join(__dirname, '..', '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

Router.get('/pdfView/:id', async (req, res) => {
  try {
    const file = await Subject.findById(req.params.id);
    res.set({
      'Content-Type': "application/pdf"
    });
    res.sendSubject(path.join(__dirname, '..', '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while Opening file. Try again later.');
  }
});

Router.get('/docView/:id', async (req, res) => {
    try {
      const file = await Subject.findById(req.params.id);
      res.set({
        'Content-Type': "application/doc"
      });
      res.sendSubject(path.join(__dirname, '..', '..', file.file_path));
    } catch (error) {
      res.status(400).send('Error while Opening file. Try again later.');
    }
  });

module.exports = Router;