import React from "react";
import issueTracker from "../images/issue-tracker.png";
import authSystem from "../images/auth-system.png";
import projectDetails from "../projects.json";
import rightIcon from "../images/icon-right.png";

const getImageByProjectImgName = (projetcImg) => {
  if (projetcImg === "issue-tracker.png") return issueTracker;
  if (projetcImg === "auth-system.png") return authSystem;
  return null;
};

const Projects = () => {
  return (
    <>
      <div className="project-section">
        <div className="project-header-wrapper">
          <p className="project-heading">Projects</p>
        </div>
        <div className="project-list">
          {projectDetails.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-img">
                <img
                  src={getImageByProjectImgName(project.img)}
                  alt={project.title}
                />
              </div>
              <div className="project-card-body">
                <p className="project-card-title">{project.title}</p>
                <p className="project-card-desc">{project.description}</p>
                <a href={project.webLink} className="project-card-link">
                  Visit Page &nbsp;
                  <span>
                    <img src={rightIcon} alt="Icon-Right" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
