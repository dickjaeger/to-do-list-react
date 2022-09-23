import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError, fetchExampleTasks } from '../../tasksSlice';
import { Button, ButtonsContainer } from "../../../../common/styled";
import { Error } from './styled';

const ExampleTasksButton = () => {
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
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