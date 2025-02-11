import React from "react";
import "./styles/Contact.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className="contacts-section">
      <div className="contacts-text">
        <div>
          <h1>I'd love to collaborate</h1>
          <a href="mailto:sanskritisri27@gmail.com">Let's talk!</a>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <a href="https://www.linkedin.com/in/sanskriti-s/" target="_blank">
            <FaLinkedinIn size={35}/>
          </a>
          <a href="https://github.com/sanskriti2005" target="_blank">
            <FaGithub size={35}/>
          </a>
        </div>
      </div>
    </div>
  );
};
