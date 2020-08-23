import React, { Fragment } from "react";
import ChartFilters from "./ChartFilters";
import ChartView from "./Chart";
import Countries from "./Countries";

const Chart = () => {
  return (
    <Fragment>
      <Countries />
      <ChartFilters />
      <ChartView />
    </Fragment>
  );
};

export default Chart;
