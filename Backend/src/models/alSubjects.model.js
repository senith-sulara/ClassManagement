const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ALSubjects = new Schema({
  alSubject: {type: String},
  grade: { type: String},
  date: { type: String},
  classTime: { type: String},
  ZoomLink: { type: String},
  file_path: {type: String},
  file_mimetype: {type: String}
},
 { 
  timestamps: true 
 }
);

module.exports = mongoose.model("alSubjects", ALSubjects);