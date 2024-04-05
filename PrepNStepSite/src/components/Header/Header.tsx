import "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/PrepNStep.png";
import "./header.scss";

const Header = () => {
  const activeStyle = { color: "#F2873D" }; // The color you want for the active link
  const location = useLocation(); // This hook returns the current location object

  const isWeeklyMenuActive = () => {
    const path = location.pathname;
    return (
      path.startsWith("/weeklymenu") ||
      path.startsWith("/ChefsChoice") ||
      path.startsWith("/Cutting") ||
      path.startsWith("/MuscleGain")
    );
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" end>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/weeklymenu"
          style={() => (isWeeklyMenuActive() ? activeStyle : undefined)}
        >
          Weekly Menu
        </NavLink>
        <NavLink
          to="/mealplans"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Meal Plans
        </NavLink>
        <NavLink
          to="/workout"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Workout Routines
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>
      </nav>
      <div className="sign-in">
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
