import React from "react";
import { NavLink } from "react-router-dom";
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about-me" className="nav-link">
            About Me
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/experience" className="nav-link">
            Experience
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
