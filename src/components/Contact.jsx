import React from "react";
import "./styles/Contact.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className="contacts-section">
      <div className="contacts-text">
        <div>
          <h1>Text 1</h1>
          <a href="">Text 2 with modal</a>
        </div>
      </div>
      <div className="footer">
        <div className="animation">AAA</div>
        <div className="links">
          <a href="https://www.linkedin.com/in/sanskriti-s/">
            <FaLinkedinIn size={35}/>
          </a>
          <a href="https://github.com/sanskriti2005">
            <FaGithub size={35}/>
          </a>
        </div>
      </div>
    </div>
  );
};
