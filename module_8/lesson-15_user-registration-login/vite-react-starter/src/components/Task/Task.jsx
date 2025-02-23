import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations";
import s from "./Task.module.css";

const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={s.wrapper}>
      <p className={s.text}>{text}</p>
      <button type="button" className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Task;
