const mongoose = require("mongoose");
const studentSchema=new mongoose.Schema({
    name:String,
    email:String,
    roll:Number,
    mobile:Number
})

const Student = mongoose.model('students',studentSchema);
module.exports = Student;