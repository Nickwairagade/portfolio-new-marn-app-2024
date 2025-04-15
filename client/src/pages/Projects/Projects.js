import React from "react";
import Spin from "react-reveal/Spin";
import "./Projects.css";
import { ProjectsList } from "../../utils/ProjectsList";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my projects with details and live Link
        </p>
        <div className="row" id="ads">
          {ProjectsList.map((project, index) => (
            <Spin>
              <div className="col-md-4 projects" key={index}>
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">{project.role}</span>
                    <img src={project.image} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto">
                    {project.techs.map((tech, index) => (
                      <span className="card-detail-badge" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">{project.name}</h6>
                    </div>
                    <a href="/" className="ad-btn">View</a>
                  </div>
                </div>
              </div>
            </Spin>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
