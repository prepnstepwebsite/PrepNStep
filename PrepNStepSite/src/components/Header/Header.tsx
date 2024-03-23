import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/PrepNStep.png'
import './header.scss';

const Header = () => {
  const activeStyle = { color: '#F2873D' }; // The color you want for the active link

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end style={({ isActive }) => isActive ? activeStyle : undefined}>
          Home
        </NavLink>
        <NavLink to="/weeklymenu" style={({ isActive }) => isActive ? activeStyle : undefined}>
          Weekly Menu
        </NavLink>
        <NavLink to="/mealplans" style={({ isActive }) => isActive ? activeStyle : undefined}>
          Meal Plans
        </NavLink>
        <NavLink to="/workout" style={({ isActive }) => isActive ? activeStyle : undefined}>
          Workout Routines
        </NavLink>
        <NavLink to="/blog" style={({ isActive }) => isActive ? activeStyle : undefined}>
          Blog
        </NavLink>
      </nav>
      <div className="sign-in">
        <button onClick={() => { /* Handle sign-in logic */ }}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
