const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name:{type:String},
  uid: { type: String },
  section: { type: String },
  group: { type: String },
  batch: { type: String },
  coursecode: { type: String },
  esubject: { type: String },
  mobileno: { type: Number },
  email: { type: String },
  odetails: { type: String },
  type:{type: String},
  companyName:{type:String},
  status:{type: String},
});
const Student=mongoose.model('Student',studentSchema);
module.exports=Student