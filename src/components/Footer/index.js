import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import footerLogo from "./../../assets/footer-iws-header-logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <Link to="https://innovationwebservice.com" target="_blank">
          <img
            src={footerLogo}
            title="Innovation Web Service Logo"
            alt="Innovation Web Service Logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
