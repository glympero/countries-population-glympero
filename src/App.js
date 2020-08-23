import React, { useEffect } from "react";
import AppRouter from "./routers/AppRouter";
import { useDispatch } from "react-redux";
import "./styles/styles.scss";
import { fetchCountries } from "./features/countrystore/countrystoreSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return <AppRouter />;
};

export default App;
