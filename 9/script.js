
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");

    // Create task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Delete task
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
