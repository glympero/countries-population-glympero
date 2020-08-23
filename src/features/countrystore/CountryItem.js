import React from "react";
import { Link } from "react-router-dom";

export const CountryItem = ({ title, image, id }) => (
  <div className="col-xs-12 col-md-6 col-lg-2 country-item">
    <Link to={`/${id}`}>
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </Link>
  </div>
);
