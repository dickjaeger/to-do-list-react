import "./style.css"

const Tasks = ({ tasks, readyTasksHidden, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {tasks.map((task) => (
            <li key={task.id.toString()} className={`taskList__listItem 
                ${readyTasksHidden && task.done ? "taskList__listItem--hidden" : ""}`}
            >
                <button
                    className="taskList__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <div className={`taskList__textContainer${task.done ? " taskList__textContainer--done" : ""}`}>
                    {task.content}
                </div>
                <button
                    className="taskList__button taskList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;