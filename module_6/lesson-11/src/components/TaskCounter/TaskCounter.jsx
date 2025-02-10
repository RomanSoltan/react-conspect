import s from "./TaskCounter.module.css";

const TaskCounter = () => {
  return (
    <div>
      <p className={s.text}>Active: 0</p>
      <p className={s.text}>Completed: 0</p>
    </div>
  );
};
export default TaskCounter;
