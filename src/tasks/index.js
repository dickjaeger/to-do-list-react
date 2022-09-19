import { List, ListItem, Button, TextContainer } from "./styled";

const Tasks = ({ tasks, readyTasksHidden, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map((task) => (
            <ListItem key={task.id.toString()} hidden={readyTasksHidden && task.done}>
                <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </Button>
                <TextContainer done={task.done}>
                    {task.content}
                </TextContainer>
                <Button remove onClick={() => removeTask(task.id)}>
                    🗑
                </Button>
            </ListItem>
        ))}
    </List>
);

export default Tasks;