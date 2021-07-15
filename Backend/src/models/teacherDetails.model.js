const mongoose = require("mongoose");;

const TeacherSchema = new mongoose.Schema({
  name: {type: String,required: true, trim: true},
  subject: {type: String, required: true, trim: true},
  desciption: {type: String},
  email: {type: String},
  img_path: {type: String},
  img_mimetype: {type: String}
},
{ timestamps: true });

module.exports = mongoose.model('teachers', TeacherSchema);