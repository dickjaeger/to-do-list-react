import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/styled";
import Header from '../../../common/Header';
import Section from '../../../common/Section';
import { selectTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Ups... Nie znaleziono zadania! 😰"}
                body={task ? <>To zadanie <strong>{task.done ? "jest" : "nie jest"}</strong> ukończone.</> : ""}
            />
        </Container>
    );
};


export default TaskPage;
