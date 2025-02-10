import { MdClose } from "react-icons/md";
import s from "./Task.module.css";
// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteTask, toggleCompleted } from "../../redux/actions";

const Task = ({ task }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch;

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  // 6. Відправляємо результат - екшен перемикання статусу завдання
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={s.text}>{task.text}</p>
      <button type="button" className={s.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
export default Task;
