import { useSelector } from "react-redux";
import s from "./TaskCounter.module.css";
import { selectTaskCount } from "../../redux/selectors";

const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={s.text}>Active: {count.active}</p>
      <p className={s.text}>Completed: {count.completed}</p>
    </div>
  );
};
export default TaskCounter;
