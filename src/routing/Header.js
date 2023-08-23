import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header_container">
      <nav className="navbar">
        <Link to="home" className="logo_siteName">
          <img src={logo} alt="logo" />
          <h2>bkvtech</h2>
        </Link>
        <nav className="navLinks">
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "inActiveLink"
            }
            to="home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "inActiveLink"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "inActiveLink"
            }
            to="contact"
          >
            Contact
          </NavLink>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
