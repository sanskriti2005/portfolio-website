import React from "react";
import './styles/Aboutme.css'

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-animation">
        <div className="glow"></div>
        <div className="particles">
          <div className="rotate">
            <div className="angle">
              <div className="size">
                <div className="position">
                  <div className="pulse">
                    <div className="particle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="angle">
              <div className="size">
                <div className="position">
                  <div className="pulse">
                    <div className="particle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="angle">
              <div className="size">
                <div className="position">
                  <div className="pulse">
                    <div className="particle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-text">
        <h1>About Me</h1>

        <p>
          Passionate and driven frontend developer with a strong foundation in
          web technologies. Eager to learn and adapt to new frameworks, I thrive
          in collaborative environments and am committed to community
          engagement. My experience spans building responsive web applications,
          open-source contributions, and developing user-centric solutions,
          reflecting a dedication to continuous growth and impactful teamwork.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
