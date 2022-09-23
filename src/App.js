import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';
import Navigation from './common/Navigation';

const App = () => (
  <HashRouter>
    <Navigation pages={[
      {
        path: "/zadania",
        title: "Lista zadań",
        component: <TasksPage />
      },
      {
        path: "/autor",
        title: "O autorze",
        component: <AuthorPage />
      },
    ]} />
    <Switch>
      <Route path="/szczegoly-zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
