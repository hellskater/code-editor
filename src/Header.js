import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__1st">
        <Link to="/">
          <h1>JavaScript Editor</h1>
        </Link>
      </div>
      <div className="header_2nd">
        <Link to="/py">
          <h1>Python Editor</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
