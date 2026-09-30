const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


// Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    course: {
        type: String,
        required: true
    }
});


// Student Model
const Student = mongoose.model("Student", studentSchema);


// GET - Display all students
app.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching students"
        });

    }
});


// POST - Add student
app.post("/students", async (req, res) => {

    try {

        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        const savedStudent = await student.save();

        res.status(201).json(savedStudent);

    } catch (error) {

        res.status(500).json({
            message: "Error adding student"
        });

    }
});


// PUT - Update student
app.put("/students/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            { new: true }
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: "Error updating student"
        });

    }
});


// DELETE - Delete student
app.delete("/students/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json({
            message: "Student deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting student"
        });

    }
});


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});

