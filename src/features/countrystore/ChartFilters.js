import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import selectVisibleCountries from "../../selectors/countries";
import selectVisibleRegions from "../../selectors/regions";
import selectVisibleChartCountries from "../../selectors/chartCountries";
import {
  countriesSelector,
  countryExists,
  addCountry,
  removeCountry,
  removeAllCountries,
} from "./countrystoreSlice";

export const ChartFilters = ({ countries }) => {
  const dispatch = useDispatch();
  const { chartCountries } = useSelector(countriesSelector);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const regions = selectVisibleRegions(countries);
  const exists = useSelector((state) => countryExists(state, selectedCountry));
  const onButtonClick = () => {
    if (!exists) {
      return dispatch(addCountry(selectedCountry));
    }
    dispatch(removeCountry(selectedCountry));
  };

  useEffect(() => {
    setSelectedCountry(null);
    setSelectedRegion(null);
  }, [countries]);

  const removeAllFromChart = () => {
    dispatch(removeAllCountries());
  };

  const handleOnChangeRegion = (region) => {
    const sc = selectVisibleChartCountries(countries, region.value);
    setSelectedRegion(region);
    setSelectedCountry(null);
    setSelectedCountries(sc);
  };

  const handleOnChangeCountry = (value) => {
    setSelectedCountry(value);
  };

  return (
    <div className="row bottom-margin">
      <div className="col-sm-3">
        <div className="filters-container">
          <label style={{ marginRight: "20px" }}>Region</label>
          <Select
            onChange={handleOnChangeRegion}
            className="basic-single"
            classNamePrefix="select"
            isClearable={false}
            isSearchable={true}
            name="color"
            options={regions}
            value={selectedRegion}
          />
        </div>
      </div>
      {selectedCountries.length > 0 && (
        <div className="col-sm-3">
          <div className="filters-container">
            <label style={{ marginRight: "20px" }}>Countries</label>
            <Select
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.alpha2Code}
              onChange={handleOnChangeCountry}
              className="basic-single"
              classNamePrefix="select"
              isClearable={false}
              isSearchable={true}
              name="color"
              options={selectedCountries}
              value={selectedCountry}
            />
          </div>
        </div>
      )}
      {selectedCountry && (
        <div className="col-sm-3 small-top-margin">
          <button onClick={() => onButtonClick()} className="btn btn-medium">
            {!exists ? "Add to Chart" : "Remove from Chart"}
          </button>
        </div>
      )}
      {chartCountries.length > 0 && (
        <div className="col-sm-3 small-top-margin">
          <button onClick={removeAllFromChart} className="btn btn-medium">
            Remove all
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: selectVisibleCountries(state.countries.data, state.filters),
  };
};

export default connect(mapStateToProps, null)(ChartFilters);
