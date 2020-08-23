import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import selectVisibleCountries from "../../selectors/countries";
import { countriesSelector } from "./countrystoreSlice";
import { CountryItem } from "./CountryItem";

export const Countries = ({ countries }) => {
  const { loading, hasErrors } = useSelector(countriesSelector);

  const renderCountries = () => {
    if (loading) return <p>Loading countries...</p>;
    if (hasErrors) return <p>Cannot display countries...</p>;
    if (countries.length === 0 && !loading) return <p>No countries found</p>;
    return countries.map((item) => (
      <CountryItem
        key={item.alpha2Code}
        title={item.name}
        image={item.flag}
        id={item.alpha2Code}
      />
    ));
  };

  return <div className="row">{renderCountries()}</div>;
};

const mapStateToProps = (state) => {
  return {
    countries: selectVisibleCountries(state.countries.data, state.filters),
  };
};

export default connect(mapStateToProps, null)(Countries);
