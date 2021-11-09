import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';
import '../styles/navbar.css';

const Navbar = () => (
  <>
    <nav className="navigation-bar d-flex">
      <div className="links-bar d-flex">
        <div className="logo-header">
          <img className="logo" src={logo} alt="Project Logo" />
          <h1> Space Travelers&apos; Hub </h1>
        </div>
        <div>
          <ul className="navlist d-flex">
            <li>
              <NavLink to="/" className="links" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none' })} exact> Rockets </NavLink>
            </li>
            <li>
              <NavLink to="/missions" className="links" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none' })}> Missions </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="links profile" style={(isActive) => ({ textDecoration: isActive ? 'underline' : 'none' })}> Profile </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
