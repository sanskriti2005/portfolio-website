import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import img from "../assets/img.jpg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          currentSection = section.id;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=sharing"
    );
    setTimeout(() => {
      window.open(
        "https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P"
      );
    }, 2000);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <div className="image">
        <img src={img} alt="headshot" className="img" />
      </div>

      {/* Hidden checkbox to toggle menu */}
      <input type="checkbox" id="menu-toggle" hidden />

      {/* Hamburger Menu Icon */}
      <div className="hamburger-div">
        <label htmlFor="menu-toggle" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>

      <div className="nav-bar">
        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <button className="resume-btn" onClick={handleResumeClick}>
        Resume
      </button>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link, scrollSpy } from "react-scroll";
// import "./styles/Navbar.css";
// import img from "../assets/img.jpg";

// const Navbar = () => {
//   // useEffect(() => {
//   //   scrollSpy.update();
//   // }, []);

//   const handleResumeClick = () => {
//     window.open('https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=sharing');
//     setTimeout(() => {
//       window.open('https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P')
//     }, 2000)
//   }

//   return (
//     <nav>
//       <div className="image">
//         <img src={img} alt="headshot-image" className="img" />
//       </div>
//       <div className="nav-bar">
//         <div className="nav-links">
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             spy={true}
//             offset={0}
//             activeClass="active"
//             className="nav-link"
//           >
//             Home
//           </Link>
//           <Link
//             to="about-me"
//             duration={500}
//             spy={true}
//             offset={0}
//             smooth={true}
//             activeClass="active"
//             className="nav-link"
//           >
//             About Me
//           </Link>
//           <Link
//             to="projects"
//             offset={0}
//             className="nav-link"
//             duration={500}
//             smooth={true}
//             spy={true}
//             activeClass="active"
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             duration={500}
//             spy={true}
//             offset={0}
//             smooth={true}
//             className="nav-link"
//             activeClass="active"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//       <button className="resume-btn" onClick={handleResumeClick}>Resume</button>
//     </nav>
//   );
// };

// export default Navbar;
