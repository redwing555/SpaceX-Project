import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

const Navbar = () => (
  <>
    <nav className="navigation-bar d-flex">
      <div className="links-bar d-flex">
        <img src={logo} alt="Project Logo" />
        <h1> Space Travelers&apos; Hub </h1>
        <ul className="d-flex">
          <li>
            <NavLink to="/" className="links" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'black' : 'red' })} exact> Rockets </NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="links" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'black' : 'red' })}> Missions </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="links" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'black' : 'red' })}> Profile </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
