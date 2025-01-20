import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.container}>
      <Form />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
