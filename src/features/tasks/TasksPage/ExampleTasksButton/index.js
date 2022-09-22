import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, fetchExampleTasks } from '../../tasksSlice';
import { Button, ButtonsContainer } from "../../../../common/styled";
import { Error } from './styled';

const ExampleTasksButton = () => {
    const { loading, error } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {error
                ? <Error>{error}</Error>
                : <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                    disabled={loading}
                >
                    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
                </Button>
            }
        </ButtonsContainer>
    );
};

export default ExampleTasksButton;