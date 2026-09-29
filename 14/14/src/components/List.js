
import { useState } from "react";

function TodoList(props) {

    const [tasks, setTasks] = useState([
        {
            text: "Complete assignment",
            completed: false
        },
        {
            text: "Study React",
            completed: false
        }
    ]);

    const [task, setTask] = useState("");

    // Add a new task
    function addTask() {

        if (task.trim() === "") {
            return;
        }

        const newTask = {
            text: task,
            completed: false
        };

        setTasks([...tasks, newTask]);

        setTask("");
    }

    // Check / uncheck a task
    function toggleTask(index) {

        const updatedTasks = [...tasks];

        updatedTasks[index].completed =
            !updatedTasks[index].completed;

        setTasks(updatedTasks);
    }

    // Remove a task
    function removeTask(index) {

        const updatedTasks =
            tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);
    }

    return (
        <section className="todo">

            <h2>{props.title}</h2>

            <div className="input-area">

                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />

                <button onClick={addTask}>
                    Add
                </button>

            </div>

            <ul>

                {tasks.map((item, index) => (

                    <li
                        key={index}
                        className={item.completed ? "completed" : ""}
                    >

                        <span>{item.text}</span>

                        <div>

                            <button
                                onClick={() => toggleTask(index)}
                            >
                                {item.completed ? "✓" : "Check"}
                            </button>

                            <button
                                onClick={() => removeTask(index)}
                            >
                                Remove
                            </button>

                        </div>

                    </li>

                ))}

            </ul>

        </section>
    );
}

export default TodoList;
