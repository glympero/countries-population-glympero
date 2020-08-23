import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-menu">
        <Link to="/">Home</Link>
        <Link to="/chart">Chart</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
