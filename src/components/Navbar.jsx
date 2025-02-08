import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-links">
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            className={`nav-link active`}
          >
            Home
          </Link>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            About Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
