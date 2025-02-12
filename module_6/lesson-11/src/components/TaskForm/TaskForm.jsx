// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import s from "./TaskForm.module.css";
import { addTask } from "../../redux/actions";

const TaskForm = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    // 5. Відправляємо результат – екшен створення завдання
    dispatch(
      addTask({
        id: crypto.randomUUID(),
        completed: false,
        text: form.elements.text.value,
      })
    );
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
