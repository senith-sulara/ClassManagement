const path = require('path');
const express = require('express');
const multer = require('multer');
const Teacher = require('../models/teacherDetails.model');
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
      fileSize: 5000000 // max file size 5MB = 5000000 bytes
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
        return cb(
          new Error(
            'only upload files with jpg, jpeg, png format.'
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
          const { name, subject, description, email } = req.body;
          const { path, mimetype } = req.file;
          const file = new Teacher({
            name,  
            subject,
            description, 
            email, 
            img_path: path,
            img_mimetype: mimetype
        });
      await file.save();
      res.send('Teacher Details and image uploaded successfully.');
      }else{
        const { name, subject, description, email} = req.body;ile;
        const file = new Teacher({
          name,  
          subject,
          description, 
          email, 
        });
      await file.save();
      res.send('Teacher Details uploaded successfully.');
      }
      } catch (error) {
        res.status(400).send('Error while uploading details. Try again later.');
      }
    },
    (error, req, res, next) => {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  );
  
  module.exports = Router;