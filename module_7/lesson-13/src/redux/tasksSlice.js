import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Виконається в момент старту HTTP-запиту
    fetchInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
