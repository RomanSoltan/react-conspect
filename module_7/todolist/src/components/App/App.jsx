import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import s from "./App.module.css";
// Імпорти компонентів
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
}

export default App;
