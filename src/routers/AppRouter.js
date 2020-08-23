import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NotFound from "../components/NotFound/NotFound";
import CountriesContainer from "../features/countrystore/CountriesContainer";
import CountryChart from "../features/countrystore/CountryChart";
import Country from "../features/countrystore/Country";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Header />
    <BreadCrumb />
    <div className="container main-content">
      <Switch>
        <Route exact path="/">
          <CountriesContainer />
        </Route>
        <Route path="/chart">
          <CountryChart />
        </Route>
        <Route path="/:id">
          <Country />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default AppRouter;
