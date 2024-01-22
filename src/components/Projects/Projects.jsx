import React, { useState } from "react";
import "./style.scss";
import { PROJECTS } from "../../PROJECT-DATA.JS";

const Projects = () => {
  return (
    <div className="projects bg-my-bg2 pb-10">
      <h2 className="text-my-gray p-16 text-lg font-normal tracking-widest uppercase text-center">
        Projects
      </h2>
      <div className="projects-card grid gap-3 grid-cols-3 px-4">
        {PROJECTS.map((item) => (
          <div className="card relative max-w-full cursor-pointer mx-auto mb-2 transition-all ease-linear shadow-my-box-shadow px-3 pt-3 pb-1 hover:scale-my-scale z-10" key={item.id}>
            <img src={item.imageUrl} alt="" className="w-96"/>
            <span className="project-date"></span>
            <br />
            <p className="uppercase text-lg font-semibold text-center tracking-widest my-3">{item.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
