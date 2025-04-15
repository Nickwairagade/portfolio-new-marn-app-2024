import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Nikhil Wairagade-Resume 2024.pdf";
import Fade from "react-reveal/Fade";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Front-End Developer !", "React JS Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9860489971"
                rel="noreferrer"
                target="_blank"
              >Hire Me</a>
              <a
                href={Resume}
                download="Nikhil_Wairagade.pdf"
                className="btn btn-cv"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
