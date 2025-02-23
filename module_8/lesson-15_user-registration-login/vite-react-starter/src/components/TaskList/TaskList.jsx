import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectAllTasks } from "../../redux/tasks/selectors";
import s from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={s.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
