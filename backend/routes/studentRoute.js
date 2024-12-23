const express = require("express");
const router = express.Router();
const { addStudent, getStudents, getStudent, updateStudent, deleteStudent } = require("./../handlers/studentHandler");

router.post('/students',async (req, res) => {
    console.log("req.body", req.body);
    let student = await addStudent(req.body); 
    res.send(student);

})

router.get('/students',async (req, res) => {
    console.log("req.body", req.body);
    let students = await getStudents(req.body); 
    res.send(students);

})

router.get('/students/:id',async (req, res) => {
    console.log("id", req.params["id"]);
    let student = await getStudent(req.params["id"]); 
    res.send(student);

})

router.put('/students/:id',async (req, res) => {
    console.log("id", req.params["id"]);
    await updateStudent(req.params["id"], req.body); 
    res.send({});

})

router.delete('/students/:id',async (req, res) => {
    console.log("id", req.params["id"]);
    await deleteStudent(req.params["id"]); 
    res.send({});

})
module.exports = router;