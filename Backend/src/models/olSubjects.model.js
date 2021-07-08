const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OLSubjects = new Schema({
  olSubject: {type: String},
  grade: { type: String},
  classTime: { type: String},
  ZoomLink: { type: String},
  file_path: {type: String},
  file_mimetype: {type: String}
},
 { 
  timestamps: true 
 }
);

module.exports = mongoose.model("olSubjects", OLSubjects);