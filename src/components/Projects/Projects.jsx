import React, { useState } from "react";
import "./style.scss";
import { PROJECTS } from "../../PROJECT-DATA.JS";
import ProjectsModal from "../Modal/ProjectsModal";

const Projects = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-card">
        {PROJECTS.map((item) => (
          <div className="card" key={item.id} onClick={handleShow}>
            <img src={item.imageUrl} alt="" />
            <span className="project-date"></span>
            <br />
            <p>{item.title}</p>
          </div>
        ))}
        <ProjectsModal show={show} setShow={(bool) => setShow(bool)} />
      </div>
    </div>
  );
};

export default Projects;
