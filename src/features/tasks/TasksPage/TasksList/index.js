import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    toggleTaskDone,
    removeTask,
    selectAreDoneTasksHidden,
    selectTasksByQuery
} from '../../tasksSlice';
import { List, ListItem, Button, TaskLink } from "./styled";

const TasksList = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const query = new URLSearchParams(location.search).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const doneTasksHidden = useSelector(selectAreDoneTasksHidden);

    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id} hidden={doneTasksHidden && task.done}>
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <TaskLink to={`szczegoly-zadania/${task.id}`} $done={task.done}>
                        {task.content}
                    </TaskLink>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default TasksList;