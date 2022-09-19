import { useState } from 'react';
import { useTasks } from './useTasks.js';
import Form from './form/index.js';
import Tasks from './tasks/index.js';
import Section from './section/index.js';
import SectionButtons from './section-buttons/index.js';
import Header from './header/index.js';
import Container from './container/index.js';

function App() {
  const [readyTasksHidden, setReadyTasksHidden] = useState(false);
  
  const toggleReadyTasksHidden = () => {
    setReadyTasksHidden(!readyTasksHidden);
  };

  const [
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllTasksReady,
  ] = useTasks();
  

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
          toggleTaskDone={toggleTaskDone}
        />}
        extraContent={<SectionButtons
          tasks={tasks}
          readyTasksHidden={readyTasksHidden}
          toggleReadyTasksHidden={toggleReadyTasksHidden}
          setAllTasksReady={setAllTasksReady}
        />}
      />
    </Container>
  );
};

export default App;
