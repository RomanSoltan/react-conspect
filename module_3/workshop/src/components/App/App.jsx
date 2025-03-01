import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  const deleteTask = (taskId) => {
    console.log(taskId);
    setTasks((prev) => {
      return prev.filter((item) => item.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
