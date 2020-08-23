import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { getCountryName } from "../../features/countrystore/countrystoreSlice";

const BreadcrumbsItem = ({ match, ...rest }) => {
  const path = match.params.path;
  const title = useSelector((state) => getCountryName(state, path));
  const pathFix = match.path.replace(":path", "");
  let url = match.url.replace(pathFix, " / ");
  if (match.path === "/:path" && match.url !== "/chart") {
    url = `/ ${title}`;
  }

  return (
    <React.Fragment>
      <li>
        <Link to={match.url || ""}>{match.url === "/" ? "Home" : url}</Link>
      </li>
      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </React.Fragment>
  );
};

const Breadcrumb = () => (
  <div className="breadcrumbs">
    <ul className="container">
      <Route path="/" component={BreadcrumbsItem} />
      <Route path="/:path" component={BreadcrumbsItem} />
    </ul>
  </div>
);

export default Breadcrumb;
