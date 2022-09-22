import { HashRouter } from 'react-router-dom'
import Tasks from './features/tasks/TasksPage';
import Author from './features/author/AuthorPage'
import Navigation from './common/Navigation';

const App = () => (
  <HashRouter>
    <Navigation pages={[
      {
        path: "/zadania",
        title: "Lista zadań",
        component: <Tasks />
      },
      {
        path: "/autor",
        title: "O autorze",
        component: <Author />
      }
    ]} />
  </HashRouter>
);

export default App;
