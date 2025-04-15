import React from "react";
import img from "../../assets/Images/profile 2.png";
import Jump from "react-reveal/Jump";
import "./About.css";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-5 col-xl-5 col-lg-5 col-sx-12 about-img">
              <img src={img} alt="profile-pic" />
            </div>
            <div className="col-md-7 col-xl-7 col-lg-7 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                “Creative and Skilled Front End Developer with 4 years
                experience, in Web development and maintaining responsive
                websites in the recruiting industry. Proficient in HTML5, CSS3,
                HTML, CSS, JavaScript, and React JS; in addition to modern
                libraries and frameworks. I also have strong skills and
                expertise in usability and possess working knowledge of Adobe
                Photoshop,Adobe XD, Lightroom & Sketch. “
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
