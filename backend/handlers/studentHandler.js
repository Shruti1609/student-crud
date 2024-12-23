const Student = require("../Db/student");

async function addStudent(studentModel){
//todo
let student = new Student({
    ...studentModel
});
await student.save();
return student.toObject();
}

async function getStudents(){
    const students = await Student.find();
    return students.map(x=>x.toObject());
}

async function getStudent(id){
    const student = await Student.findById(id);
    return student.toObject();
}

async function updateStudent(id, studentModel){
    const filter = {_id: id};
    await Student.findOneAndUpdate(filter, studentModel);
}

async function deleteStudent(id, studentModel){
    await Student.findByIdAndDelete(id);
}


module.exports={ addStudent, getStudents, getStudent, updateStudent, deleteStudent};
