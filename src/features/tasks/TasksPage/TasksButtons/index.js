import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, setAllTasksDone, toggleDoneTasksHidden } from '../../tasksSlice';
import { Button, ButtonsContainer } from "../../../../common/styled";

const TasksButtons = () => {
    const { tasks, doneTasksHidden } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return;
    };

    return (
        <ButtonsContainer>
            <Button onClick={() => {dispatch(toggleDoneTasksHidden())}}>
                {doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllTasksDone())}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    );
};

export default TasksButtons;