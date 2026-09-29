
function updateDateTime() {

    // Create a Date object
    let now = new Date();

    // Get the day
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[now.getDay()];

    // Get date
    let date =
        now.getDate() + "/" +
        (now.getMonth() + 1) + "/" +
        now.getFullYear();

    // Get time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    let time = hours + ":" + minutes + ":" + seconds;

    // Display the values
    document.getElementById("day").textContent =
        "Day: " + day;

    document.getElementById("date").textContent =
        "Date: " + date;

    document.getElementById("time").textContent =
        time;
}


// Run immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);
