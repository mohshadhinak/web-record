
// Student details object
let student = {};

// Get the form
let form = document.getElementById("studentForm");


// Function to display student details
function displayStudent(student) {

    document.getElementById("studentName").textContent =
        "Name: " + student.name;

    document.getElementById("studentRoll").textContent =
        "Roll Number: " + student.rollno;

    document.getElementById("studentCourse").textContent =
        "Course: " + student.course;

    document.getElementById("studentEmail").textContent =
        "Email: " + student.email;

    document.getElementById("studentAge").textContent =
        "Age: " + student.age;


    // Display skills using an array
    let skillList = document.getElementById("studentSkills");

    skillList.innerHTML = "";

    student.skills.forEach(function(skill) {

        let listItem = document.createElement("li");

        listItem.textContent = skill;

        skillList.appendChild(listItem);

    });
}


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Store student details in an object
    student = {
        name: document.getElementById("name").value,
        rollno: document.getElementById("rollno").value,
        course: document.getElementById("course").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,

        // Convert skills into an array
        skills: document.getElementById("skills").value
            .split(",")
            .map(function(skill) {
                return skill.trim();
            })
    };


    // Call the function
    displayStudent(student);

});
