import Task from "../Task/Task";
import s from "./TaskList.module.css";

const TaskList = () => {
  const tasks = [];
  return (
    <ul className={s.list}>
      {tasks.map((task) => (
        <li className={s.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
