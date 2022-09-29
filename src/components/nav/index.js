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
        <li>Event Details</li>
        <li>Teams Details</li>
        <li>Partners</li>
      </ul>
    </div>
  );
}

export default Navbar;
