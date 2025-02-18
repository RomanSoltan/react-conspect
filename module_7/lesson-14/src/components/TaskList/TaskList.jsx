import { useSelector } from "react-redux";
import s from "./TaskList.module.css";
import Task from "../Task/Task";
import { selectVisibleTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

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
