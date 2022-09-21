import { useState } from 'react';
import { useTasks } from '../../useTasks.js';
import Form from './Form';
import TasksList from './TasksList';
import Section from '../../common/Section';
import SectionButtons from './SectionButtons';
import Header from '../../common/Header';
import Container from '../../common/Container';

const Tasks = () => {
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
        body={<TasksList
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

export default Tasks;
