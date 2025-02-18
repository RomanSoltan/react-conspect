import { useDispatch } from "react-redux";
import s from "./Task.module.css";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/operations";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={s.text}>{task.text}</p>
      <button className={s.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
export default Task;
