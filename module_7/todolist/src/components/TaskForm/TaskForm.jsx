import { useDispatch } from "react-redux";
import s from "./TaskForm.module.css";
import Button from "../Button/Button";
import { addTask } from "../../redux/operations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(e.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
export default TaskForm;
