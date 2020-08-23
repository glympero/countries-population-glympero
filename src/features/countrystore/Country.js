import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getCountryByCode } from "./countrystoreSlice";
import { useParams, useHistory } from "react-router-dom";

const Country = () => {
  let { id } = useParams();
  const history = useHistory();

  const selectedCountry = useSelector((state) => getCountryByCode(state, id));

  const getCurrencies = (cur) => {
    const currencies = cur.map((item) => {
      if (item.symbol && item.code) {
        return `${item.symbol} ${item.code}. `;
      }
      return "";
    });
    return currencies;
  };

  const getLanguages = (lng) => {
    const languages = lng.map((item, index) => {
      return `${item.name}${index === lng.length - 1 ? "." : ", "} `;
    });
    return languages;
  };

  const getTimeZones = (tmz) => {
    const timezones = tmz.map((item, index) => {
      return `${item}${index === tmz.length - 1 ? "." : ", "} `;
    });

    return timezones;
  };

  return (
    <Fragment>
      {selectedCountry && (
        <div className="country">
          <div className="row ">
            <div className="col-md-6 col-sm-12">
              <img src={selectedCountry.flag} alt={selectedCountry.name} />
            </div>
            <div className="col-md-6 col-sm-12 ">
              <h2 className="text-left">{selectedCountry.name}</h2>
              <p>Region: {selectedCountry.region}</p>

              <p className="no-margin">
                Population: {selectedCountry.population}
              </p>
              <p className="no-margin">
                Currency: {getCurrencies(selectedCountry.currencies)}
              </p>
              <p className="">
                {`Language${selectedCountry.languages.length > 1 ? "s" : ""}`}:{" "}
                {getLanguages(selectedCountry.languages)}
              </p>
              <p className="no-margin">
                Timezones: {getTimeZones(selectedCountry.timezones)}
              </p>
              <div className="button-container">
                <button
                  onClick={() => history.goBack()}
                  className="btn btn-large"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Country;
