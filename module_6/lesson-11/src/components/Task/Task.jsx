import { MdClose } from "react-icons/md";
import s from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={s.wrapper}>
      <input type="checkbox" className={s.checkbox} checked={task.completed} />
      <p className={s.text}>{task.text}</p>
      <button className={s.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
export default Task;
