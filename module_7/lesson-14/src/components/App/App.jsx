import { useEffect } from "react";
// Імпорти компонентів
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/operations";
// 1. Імпортуємо функції-селектори
import { selectError, selectIsLoading } from "../../redux/selectors";
import s from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  // 2. Використуваєм їх для отримання значень стану
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
