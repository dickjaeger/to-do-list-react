import { Container } from "../../../common/styled";
import Header from '../../../common/Header';
import Section from '../../../common/Section';
import Form from './Form';
import TasksList from './TasksList';
import TasksButtons from './TasksButtons';
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";

const Tasks = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      body={<Form />}
      extraContent={<ExampleTasksButton />}
    />
    <Section
      title="Wyszukiwarka"
      body={<Search />}
    />
    <Section
      title="Lista zadań"
      body={<TasksList />}
      extraContent={<TasksButtons />}
    />
  </Container>
);


export default Tasks;
