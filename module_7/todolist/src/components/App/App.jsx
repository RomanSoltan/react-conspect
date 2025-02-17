import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
