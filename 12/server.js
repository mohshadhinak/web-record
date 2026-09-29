
const express = require("express");

const app = express();
const PORT = 3000;

// Allows Express to read JSON data
app.use(express.json());

// Temporary student data
let students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "Computer Science"
    },
    {
        id: 2,
        name: "Anu",
        age: 21,
        course: "Computer Science"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Student Management System</h1>");
});

// 1. VIEW all students
app.get("/students", (req, res) => {
    res.json(students);
});

// 2. ADD a student
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// 3. UPDATE a student
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// 4. DELETE a student
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

