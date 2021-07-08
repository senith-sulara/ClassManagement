const User = require('../models/users.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {   

    try{
        const { name, phone, role, email, password, passwordCheck } = req.body;

      //validations
        if(!name || !phone || !role || !email || !password || !passwordCheck)
            return res.status(400).json({ msg: "All Fields are required"});
        if(password.length < 6)
            return res.status(400).json({msg: "Password length must be at least 6 characters long"});
        if(password !== passwordCheck)
            return res.status(400).json({msg: "Password is not Match"}); 

        const existingUser = await User.findOne({ email: email});
        if(existingUser)
            return res.status(400).json({msg: "Email already exists"});

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        if (req.body) {
            const user = new User({
                  name,
                  phone,
                  role,
                  email,
                  password: passwordHash,
              });
            await user.save()
            .then(data => {
              res.status(200).send({ data: data });
            })
            .catch(error => {
              res.status(500).send({ error: error.message });
            });
          }

      }catch(err){
            res.status(500)
      }
}

const login = async (req, res) => {

    try{
        const {email, password} = req.body;
    
        //validations
        if(!email || !password)
          return res.status(400).json({msg: "All Fields are required"});
        
          const user = await User.findOne({email: email});
          if(!user)
            return res.status(400).json({msg: "Unregistered User"});
          
          const isMatch = await bcrypt.compare(password, user.password);
          if(!isMatch)
            return res.status(400).json({msg: "Invalid Username or password"});
    
          const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              // email: user.email,
            },
          });
    
      }catch(err){
        res.status(500).json({error: err.message});
      }

}

const tokenValid = async (req, res) => {
    try{
      const token = req.header("X-Authorization");
          if(!token)
              return res.json(false);
  
          const verified = jwt.verify(token, process.env.JWT_SECRET);
          if(!verified)
              return res.json(false);
          
          const user = User.findById(verified.id);
          if(!user)
              return res.json(false);
  
          return res.json(true);
          
    }catch(err){
      res.status(500).json({error: err.message});
    }
  }

const ckeckStatus = async (req, res) => {
    let emailSent = req.body.email
    //console.log(req.body.email);

    await Paper.find({ email: emailSent }, { state: 1, _id: 0 })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getUser = async (req, res) => {
    var status = "failed";
    var data = null;
    await User.findOne({ email: req.body.email }, function (err, user) {

        if (err) {
            console.log(err)
        }
        else if (user != null) {
            data = user;
            status = "success";
        }
        res.status(200).json({
            status: status,
            data: data
        });
    });

}

const getProfile = async (req, res) => {
    var userStatus = "failed";
    var userData = null;
    await User.findOne({ email: req.params.email }, function (err, user) {

        if (err) {
            console.log(err)
        }
        else if (user != null) {
            userData = user;
            userStatus = "success";
        } else {
            res.status(200).json({
                userStatus: userStatus,
                data: {
                    user: userData,
                }
            });
        }
    });
}

const updateProfile = async (req, res) => {
    var email = req.params.email

    await User.findOneAndUpdate({ email: email }, req.body)
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const userLog = async (req, res) =>{
    const user = await User.findById(req.user);
    res.json({
      name: user.name,
      id: user._id,
    });
  }

module.exports = {
    register,
    login,
    tokenValid,
    ckeckStatus,
    getUser,
    getProfile,
    updateProfile,
    userLog,
  };