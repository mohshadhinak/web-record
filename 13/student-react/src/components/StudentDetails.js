
import { useState } from "react";

function StudentDetails(props) {

    const [showDetails, setShowDetails] = useState(true);

    return (
        <section className="student">

            <h2>Student Details</h2>

            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <div>
                    <p><strong>Name:</strong> {props.name}</p>
                    <p><strong>Roll No:</strong> {props.rollNo}</p>
                    <p><strong>Course:</strong> {props.course}</p>
                    <p><strong>Age:</strong> {props.age}</p>
                </div>
            )}

        </section>
    );
}

export default StudentDetails;
