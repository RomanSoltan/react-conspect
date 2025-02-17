// для всіх запитів axios
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL-адресу
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// Оголошення асинхронної операції
// fetchTasks для отримання даних
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
