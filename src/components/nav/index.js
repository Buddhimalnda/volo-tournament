import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/event">Event Details</Link>
        </li>
        <li>
          <Link to="/team">Teams Details</Link>
        </li>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
