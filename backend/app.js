const express = require('express')
const app = express()
const port = 3000
const mongoose =require("mongoose");
const userRoutes = require("./routes/studentRoute")
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userRoutes);

async function connectDb() {
   await mongoose.connect("mongodb://localhost:27017/StudentsDb/students",{
    dbName: "StudentsDb",    
   });

}
connectDb().catch((err)=>console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})