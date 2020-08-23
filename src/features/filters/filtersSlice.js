import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
    language: "",
    currency: "",
    sortBy: "ASC",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});
export const selectText = (state) => state.filters.text;
export const selectLanguage = (state) => state.filters.language;
export const selectCurrency = (state) => state.filters.currency;
export const selectSort = (state) => state.filters.sortBy;

export const {
  setText,
  setLanguage,
  setCurrency,
  setSortBy,
} = filtersSlice.actions;

export default filtersSlice.reducer;
