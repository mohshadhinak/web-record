
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [editId, setEditId] = useState(null);


  // Get all students
  function getStudents() {

    fetch("http://localhost:5000/students")
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  // Run when page loads
  useEffect(() => {

    getStudents();

  }, []);


  // Add or update student
  function handleSubmit(event) {

    event.preventDefault();

    const student = {
      name: name,
      age: age,
      course: course
    };


    // ADD
    if (editId === null) {

      fetch("http://localhost:5000/students", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

      })
        .then(response => response.json())
        .then(() => {

          getStudents();
          clearForm();

        });

    }


    // UPDATE
    else {

      fetch(`http://localhost:5000/students/${editId}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

      })
        .then(response => response.json())
        .then(() => {

          getStudents();
          clearForm();

        });
    }
  }


  // Select student for editing
  function editStudent(student) {

    setName(student.name);
    setAge(student.age);
    setCourse(student.course);

    setEditId(student._id);
  }


  // Delete student
  function deleteStudent(id) {

    fetch(`http://localhost:5000/students/${id}`, {

      method: "DELETE"

    })
      .then(response => response.json())
      .then(() => {

        getStudents();

      });
  }


  // Clear form
  function clearForm() {

    setName("");
    setAge("");
    setCourse("");

    setEditId(null);
  }


  return (

    <div className="app">

      <header>

        <h1>Student Management System</h1>

        <p>
          React + Node.js + MongoDB
        </p>

      </header>


      <main>


        {/* Student Form */}

        <section className="form-section">

          <h2>
            {editId
              ? "Update Student"
              : "Add Student"}
          </h2>


          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />


            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) =>
                setAge(e.target.value)
              }
              required
            />


            <input
              type="text"
              placeholder="Course"
              value={course}
              onChange={(e) =>
                setCourse(e.target.value)
              }
              required
            />


            <button type="submit">

              {editId
                ? "Update Student"
                : "Add Student"}

            </button>


            {editId && (

              <button
                type="button"
                onClick={clearForm}
              >
                Cancel
              </button>

            )}

          </form>

        </section>


        {/* Student Table */}

        <section className="student-section">

          <h2>Student Records</h2>


          {students.length === 0 ? (

            <p>No student records found.</p>

          ) : (

            <table>

              <thead>

                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>

              </thead>


              <tbody>

                {students.map(student => (

                  <tr key={student._id}>

                    <td>
                      {student.name}
                    </td>

                    <td>
                      {student.age}
                    </td>

                    <td>
                      {student.course}
                    </td>

                    <td>

                      <button
                        onClick={() =>
                          editStudent(student)
                        }
                      >
                        Edit
                      </button>


                      <button
                        onClick={() =>
                          deleteStudent(
                            student._id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </section>

      </main>


      <footer>

        <p>
          Student Management System
        </p>

      </footer>

    </div>
  );
}

export default App;

