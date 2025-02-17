import { useDispatch } from "react-redux";
import s from "./Task.module.css";
import { MdClose } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();

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
