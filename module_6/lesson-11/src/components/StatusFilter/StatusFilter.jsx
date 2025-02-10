// 0. Імпортуємо фабрику екшену
import { setStatusFilter } from "../../redux/actions";
import Button from "../Button/Button";
import s from "./StatusFilter.module.css";
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";

const StatusFilter = () => {
  // 2. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // 3  Отримуємо значення фільтра із стану Redux
  const filter = useSelector((state) => state.filters.status);
  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={s.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
export default StatusFilter;
