import React from "react";
import { NavLink } from "react-router-dom";

function OverwiewNav() {
  return (
    <div>
      <div className="topDiv">
        <h2>Overwiew</h2>
      </div>
      <nav className="overwiewNav">
        <ul>
          <li>
            <NavLink to="/projects">All Projects</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">All Tasks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default OverwiewNav;
