import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/styled";
import Header from '../../../common/Header';
import Section from '../../../common/Section';
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Ups... Nie znaleziono zadania! 😰"}
                body={<>To zadanie <strong>{task.done ? "jest" : "nie jest"}</strong> ukończone.</>}
            />
        </Container>
    );
};


export default TaskPage;
