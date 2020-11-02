import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 0,
  },
  reducers: {
    setHome: (state) => {
      state.value = 0;
    },
    setNewBook: (state) => {
      state.value = 1;
    },
    setViewBook: (state) => {
      state.value = 2;
    },
  },
});

export const { setHome, setNewBook, setViewBook } = pageSlice.actions;

export const selectPage = (state) => state.page.value;

export default pageSlice.reducer;
