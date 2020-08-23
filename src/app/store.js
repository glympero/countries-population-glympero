import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import countriesReducer from "../features/countrystore/countrystoreSlice";
import filtersReducer from "../features/filters/filtersSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    filters: filtersReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
});
