import { createSlice } from "@reduxjs/toolkit";
const URL = "https://restcountries.eu/rest/v2";
export const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
  chartCountries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries: (state) => {
      state.loading = true;
    },
    getCountriesFiltered: (state) => {
      state.loading = true;
    },
    getCountriesSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCountriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addCountry: (state, action) => {
      state.chartCountries.push(action.payload);
    },
    removeCountry: (state, action) => {
      const index = state.chartCountries.findIndex(
        (ctr) => ctr.alpha2Code === action.payload.alpha2Code
      );
      state.chartCountries.splice(index, 1);
    },
    removeAllCountries: (state, action) => {
      state.chartCountries = [];
    },
  },
});

export const {
  addCountry,
  removeCountry,
  getCountries,
  getCountriesSuccess,
  getCountriesFailure,
  removeAllCountries,
} = countriesSlice.actions;

export const getCountryByCode = (state, code) =>
  state.countries.data.find((country) => country.alpha2Code === code);

export const getCountryName = (state, code) =>
  state.countries.data
    .filter((country) => country.alpha2Code === code)
    .map((country) => country.name);

export const countryExists = (state, country) => {
  if (country) {
    return state.countries.chartCountries.some(
      (ct) => ct.alpha2Code === country.alpha2Code
    );
  }
  return false;
};

export default countriesSlice.reducer;

export const countriesSelector = (state) => state.countries;

export function fetchCountries(all = true, type, search) {
  const searchUrl = all ? `${URL}/all` : `${URL}/${type}/${search}`;
  return async (dispatch) => {
    dispatch(getCountries());

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      if (data.status) {
        dispatch(getCountriesSuccess([]));
      } else {
        dispatch(getCountriesSuccess(data));
      }
    } catch (error) {
      dispatch(getCountriesFailure());
    }
  };
}
export function fetchCountriesFiltered(type, search) {
  return async (dispatch) => {
    dispatch(getCountries());

    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/${type}/${search}`
      );
      const data = await response.json();
      if (data.status) {
        dispatch(getCountriesSuccess([]));
      } else {
        dispatch(getCountriesSuccess(data));
      }
    } catch (error) {
      dispatch(getCountriesFailure());
    }
  };
}
