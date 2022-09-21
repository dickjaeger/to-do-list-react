import { Container } from "./styled";
import Header from '../../common/Header';
import Section from '../../common/Section';
import Form from './Form';
import TasksList from './TasksList';
import SectionButtons from './SectionButtons';

const Tasks = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      body={<Form />}
    />
    <Section
      title="Lista zadań"
      body={<TasksList />}
      extraContent={<SectionButtons />}
    />
  </Container>
);


export default Tasks;
