// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
// 0. Імпортуємо фабрику екшену
import { setStatusFilter } from "../../redux/filtersSlice";
import s from "./StatusFilter.module.css";

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
