import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  setText,
  setLanguage,
  setCurrency,
  setSortBy,
  selectText,
  selectLanguage,
  selectCurrency,
  selectSort,
} from "./filtersSlice";
import { fetchCountries } from "../countrystore/countrystoreSlice";

export function Filters() {
  const textFilter = useSelector(selectText);
  const languageFilter = useSelector(selectLanguage);
  const currencyFilter = useSelector(selectCurrency);
  const sortValue = useSelector(selectSort);
  const dispatch = useDispatch();
  const orderByTitle = "Sort By";
  const options = [
    {
      label: "ASC",
      value: "ASC",
    },
    {
      label: "DSC",
      value: "DSC",
    },
  ];

  const onSelectOrder = (sort) => {
    dispatch(setSortBy(sort.value));
  };
  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>
          Search countries, add them to chart and compare their population
        </h2>
      </div>

      <div className="col-sm-12">
        <input
          type="text"
          placeholder="Filter by Name..."
          value={textFilter}
          onChange={(event) => dispatch(setText(event.target.value))}
        />
      </div>

      <div className="col-sm-12 col-md-10 filters-container">
        <input
          type="text"
          placeholder="Search by language..."
          value={languageFilter}
          onChange={(event) => dispatch(setLanguage(event.target.value))}
        />
      </div>
      <div className="col-sm-12 col-md-2">
        <div className="filters-container">
          <button
            disabled={languageFilter === ""}
            onClick={() => {
              dispatch(fetchCountries(false, "lang", languageFilter));
            }}
            className="btn btn-medium"
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-md-10 filters-container">
        <input
          type="text"
          placeholder="Search by Currency..."
          value={currencyFilter}
          onChange={(event) => dispatch(setCurrency(event.target.value))}
        />
      </div>
      <div className="col-sm-12 col-md-2">
        <div className="filters-container">
          <button
            disabled={currencyFilter === ""}
            onClick={() => {
              dispatch(fetchCountries(false, "currency", currencyFilter));
            }}
            className="btn btn-medium"
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-sm-12 filters-container">
        <button
          disabled={
            textFilter === "" && languageFilter === "" && currencyFilter === ""
          }
          className="btn btn-medium"
          onClick={(event) => {
            dispatch(setLanguage(""));
            dispatch(setCurrency(""));
            dispatch(setText(""));
            dispatch(fetchCountries());
          }}
        >
          Show all
        </button>

        <div className="filters-container">
          <label style={{ marginRight: "20px" }}>{orderByTitle}</label>
          <Select
            onChange={onSelectOrder}
            className="basic-single"
            classNamePrefix="select"
            options={options}
            isClearable={false}
            value={{ value: sortValue, label: sortValue }}
          />
        </div>
      </div>
    </div>
  );
}
