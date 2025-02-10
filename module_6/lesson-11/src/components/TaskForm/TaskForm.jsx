import Button from "../Button/Button";
import s from "./TaskForm.module.css";

const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
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
