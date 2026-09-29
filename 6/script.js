
function calculateResult() {

    // Get marks from input fields
    let java = Number(document.getElementById("java").value);
    let fullstack = Number(document.getElementById("fullstack").value);
    let datamining = Number(document.getElementById("datamining").value);
    let aiml = Number(document.getElementById("aiml").value);
    let ke = Number(document.getElementById("ke").value);

    // Calculate total and average
    let total = java + fullstack + datamining + aiml + ke;
    let average = total / 5;

    let grade;

    // Determine grade using conditional statements
    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Display the results
    document.getElementById("total").textContent =
        "Total: " + total + " / 500";

    document.getElementById("average").textContent =
        "Average: " + average.toFixed(2);

    document.getElementById("grade").textContent =
        "Grade: " + grade;
}

