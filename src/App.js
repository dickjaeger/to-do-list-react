import { useState } from 'react';
import './App.css';
import Form from './form/index.js';
import Tasks from './tasks/index.js';
import Section from './section/index.js';
import SectionButtons from './section-buttons/index.js';
import Header from './header/index.js';
import Container from './container/index.js';

function App() {
  const [readyTasksHidden, setReadyTasksHidden] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "pozmywać naczynia", done: false },
    { id: 2, content: "odrobić zadanie z YouCode", done: true },
  ]);

  const addNewTask = (content) => {
    if (!content) {
      return
    }

    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section title="Lista zadań"
        body={<Tasks
          tasks={tasks}
          readyTasksHidden={readyTasksHidden}
          removeTask={removeTask}
        />}
        extraContent={<SectionButtons tasks={tasks} readyTasksHidden={readyTasksHidden} />}
      />
    </Container>
  );
}

export default App;
