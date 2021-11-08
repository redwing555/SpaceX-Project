import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navigation-bar d-flex">
      <div className="links-bar d-flex">
        <img src="../planet.png" alt="Project Logo" />
        <h1> Space Travelers&apos; Hub </h1>
        <ul className="d-flex">
          <li>
            <NavLink to="/" className="links"> Rockets </NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="links"> Missions </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="links"> Profile </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
