import './App.css';
import Form from './form/index.js';
import Tasks from './tasks/index.js';
import Section from './section/index.js';
import SectionButtons from './section-buttons/index.js';
import Header from './header/index.js';
import Container from './container/index.js';

let tasks = [
  { id: 1, content: "pozmywać naczynia", done: false },
  { id: 2, content: "odrobić zadanie z YouCode", done: true },
];

let readyTasksHidden = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" 
               body={<Form />} 
      />
      <Section title="Lista zadań" 
               body={<Tasks tasks={tasks} readyTasksHidden={readyTasksHidden} />} 
               extraContent={<SectionButtons tasks={tasks} readyTasksHidden={readyTasksHidden} />} 
      />
    </Container>
  );
}

export default App;
