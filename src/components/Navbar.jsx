import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link, scrollSpy } from "react-scroll";
import "./styles/Navbar.css";
import img from "../assets/img.jpg";

const Navbar = () => {

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=sharing');
    setTimeout(() => {
      window.open('https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P')
    }, 2000)
    
  }

  return (
    <nav>
      <div className="image">
        <img src={img} alt="headshot-image" className="img" />
      </div>
      <div className="nav-bar">
        <div className="nav-links">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={0}
            className="nav-link"
          >
            Home
          </Link>
          <Link
            to="about-me"
            duration={500}
            spy={true}
            activeClass="active"
            offset={0}
            className="nav-link"
          >
            About Me
          </Link>
          <Link
            to="projects"
            activeClass="active"
            offset={0}
            className="nav-link"
            duration={500}
            spy={true}
          >
            Projects
          </Link>
          <Link
            to="contact"
            duration={500}
            spy={true}
            activeClass="active"
            offset={0}
            className="nav-link"
          >
            Contact
          </Link>
        </div>
      </div>
      <button className="resume-btn" onClick={handleResumeClick}>Resume</button>
    </nav>
  );
};

export default Navbar;
