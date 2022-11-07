import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TfiTimer, TfiCalendar, TfiBriefcase } from "react-icons/Tfi";

function Root() {
  return (
    <div>
      <Outlet />
      <nav className="rootNav">
        <ul>
          <li>
            <NavLink to="/projects">
              <TfiBriefcase />
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <TfiCalendar />
            </NavLink>
          </li>
          <li>
            <NavLink to="/timelogs">
              <TfiTimer />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Root;
