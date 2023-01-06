const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser({ urlencoded: true }));

let classNumber = 0;
let student_Roll_Number = 100;

const classSchema = mongoose.Schema;
let classData = new classSchema({
    class_Id: { type: String, default: classNumber },
    numberOfStudent: { type: Number }
});

const classModel = mongoose.model("Class", classData);

const studentSchema = mongoose.Schema;
let studentData = new studentSchema({
    student_Id: { type: String, default: student_Roll_Number },
    name: { type: String },
    class_Id: { type: String }
});

const studentModel = mongoose.model("Student", studentData);

app.post("/v1/myClass", async (req, res) => {
    classNumber++;
    try {
        if (req.body.numberOfStudent) {
            let Class = await classModel.create({
                class_Id: req.body.class_Id,
                numberOfStudent: req.body.numberOfStudent
            });

            res.status(201).json({
                result: _id
            })
        } else {
            res.status(400).json({
                error: "numberOfStudent is not defined !"
            })
        }

    } catch (e) {
        res.json({
            message: e.message
        })
    }
});

app.post("/v1/myClass/:myClassId/students", async (req, res) => {
    let classID = req.params.myClassId;
    if (classModel.find({ class_Id: classID })) {
        let Student = await studentModel.create({
            name: req.body.name,
            class_Id: classID
        });
        res.status(201).json({
            result: Student
        })
    } else {
        res.status(400).json("Invalid Input")
    }
});

app.get("/v1/myClass", async (req, res) => {
    let classDetails = await classModel.find();
    res.status(200).json({
        result: classDetails
    })
});

app.get("/v1/myClass/:myClassId", async (req, res) => {
    let classID = req.params.myClassId;
    let result = await classModel.find({ class_Id: classID });
    if (result) {
        res.status(200).json({
            result
        })
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

app.get("/v1/myClass/:myClassId/students", async (req, res) => {
    let classID = req.params.myClassId;
    if (classModel.find({ class_Id: classID })) {
        let studentData = await studentModel.find({ class_Id: classID });
        if (studentData) {
            res.status(201).json({
                result: studentData
            })
        } else {
            res.status(404).json({
                error: "There are no students at this class"
            })
        }
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

app.get("/v1/myClass/:myClassId/students/:studentId", async (req, res) => {
    let classID = req.params.myClassId;
    let StudentID = req.params.studentId;
    if (classModel.find({ class_Id: classID })) {
        let studentData = await studentModel.find({ class_Id: classID, student_Id: StudentID });
        if (studentData) {
            res.status(201).json({
                result: studentData
            })
        } else {
            res.status(404).json({
                error: "There is no student of that id"
            })
        }
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

app.put("/v1/myClass/:myClassId/students/:studentId", async (req, res) => {
    let classID = req.params.myClassId;
    let StudentID = req.params.studentId;
    if (classModel.find({ class_Id: classID })) {
        let studentData = await studentModel.find({ class_Id: classID, student_Id: StudentID });
        if (studentData && req.body.name) {
            let result = await studentModel.updateOne({ student_Id: StudentID }, {
                student_Id: StudentID,
                name: req.body.name,
                class_Id: classID
            })
            res.status(201).json({
                result: result
            })
        } else {
            res.status(404).json({
                error: "Please provide valid input"
            })
        }
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

app.delete("/v1/myClass/:myClassId", async (req, res) => {
    let classID = req.params.myClassId;
    let result = await classModel.find({ class_Id: classID });
    if (result) {
        await classModel.deleteOne({ class_Id: classID });
        res.status(204).json({
            message: "Deleted Successfully"
        })
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

app.delete("/v1/myClass/:myClassId/students/:studentId", async (req, res) => {
    let classID = req.params.myClassId;
    let StudentID = req.params.studentId;
    if (classModel.find({ class_Id: classID })) {
        let studentData = await studentModel.find({ class_Id: classID, student_Id: StudentID });
        if (studentData) {
            let result = studentModel.deleteOne({ student_Id: StudentID })
            res.status(204).json({
                message: "Deleted Successfully"
            })
        } else {
            res.status(404).json({
                error: "There is no student of that id"
            })
        }
    } else {
        res.status(404).json({
            error: "There is no class at that id"
        })
    }
});

mongoose
.connect("mongodb+srv://root:mongo9597DB@cluster0.nsz5wgf.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

mongoose.set('strictQuery', false);

app.listen(5000, () => {
    console.log("Server is listening at port 5000")
});