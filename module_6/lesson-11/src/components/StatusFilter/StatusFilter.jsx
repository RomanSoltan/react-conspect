import Button from "../Button/Button";
import s from "./StatusFilter.module.css";

const StatusFilter = () => {
  return (
    <div className={s.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};
export default StatusFilter;
