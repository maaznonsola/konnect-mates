import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted p-2 text-center footer">
      <Link to="/install-app" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Install as an App
      </Link>
      <a className=" btn btn-primary p-2" href="mailto:konnectmates@gmail.com">
        Contact @ Gmail
      </a>{" "}
      {/* <Link to="/version-changes" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> View Version Changes
      </Link> */}
      <Link to="/terms-conditions" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Terms & Conditions
      </Link>
    </footer>
  );
};

export default Footer;
