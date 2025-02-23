import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import TaskList from "../../components/TaskList/TaskList";
import TaskEditor from "../../components/TaskEditor/TaskEditor";
import { fetchTask } from "../../redux/tasks/operations";
import { selectLoading } from "../../redux/tasks/selectors";

const TasksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Your tasks</DocumentTitle>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </div>
  );
};
export default TasksPage;
