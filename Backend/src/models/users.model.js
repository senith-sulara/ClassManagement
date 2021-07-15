const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: {type: String,required: true, trim: true},
  phone: {type: String},
  role: { type: String,required: true, trim: true },
  email: {type: String,required: true, trim: true, unique: true,},
  password: {type: String,required: true, minlength: 6}, 
},
{ timestamps: true });

module.exports = mongoose.model('users', UserSchema);