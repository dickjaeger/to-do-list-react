import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask } from '../tasksSlice';
import { List, ListItem, Button, TextContainer } from "./styled";

const TasksList = () => {
    const { tasks, doneTasksHidden } = useSelector(selectTasks);
    const dispatch = useDispatch();
    console.log(tasks);
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id} hidden={doneTasksHidden && task.done}>
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <TextContainer done={task.done}>
                        {task.content}
                    </TextContainer>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default TasksList;