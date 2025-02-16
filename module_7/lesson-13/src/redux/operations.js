// для всіх запитів axios
import axios from "axios";
import { fetchError, fetchInProgress, fetchSuccess } from "./tasksSlice";

// Встановлюємо базову URL-адресу
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// Оголошення асинхронної операції
// fetchTasks для отримання даних
export const fetchTasks = () => async (dispatch) => {
  try {
    // Індикатор завантаження
    dispatch(fetchInProgress());
    // Виконуємо GET-запит до "/tasks"
    // для отримання списку завдань
    const response = await axios.get("/tasks");

    // Тут буде код для обробки відповіді,
    // наприклад, dispatch отриманих даних
    // Обробка даних
    dispatch(fetchSuccess(response.data));
  } catch (e) {
    // У випадку помилки ми можемо обробити її тут
    dispatch(fetchError(e.message));
  }
};
