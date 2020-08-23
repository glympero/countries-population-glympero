import React, { Fragment } from "react";
import Countries from "./Countries";
import { Filters } from "../filters/Filters";
import ChartFilters from "./ChartFilters";
import ChartView from "./Chart";

const CountriesContainer = () => {
  return (
    <Fragment>
      <Filters />
      <Countries />
      <ChartFilters />
      <ChartView />
    </Fragment>
  );
};

export default CountriesContainer;
