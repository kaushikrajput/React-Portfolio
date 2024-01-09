import React from "react";
import "./style.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h2>skills</h2>
      <div className="text-center">
        <ul className="skills-icon">
          <li className="item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <i className="fa-brands fa-html5"></i>
              <p>HTML 5</p>
            </a>
          </li>
          <li className="item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS 3</p>
            </a>
          </li>
          <li className="item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <i className="fa-brands fa-js"></i>
              <p>JavaScipt</p>
            </a>
          </li>
          <li className="item">
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              <i className="fa-brands fa-react"></i>
              <p>React</p>
            </a>
          </li>
          <li className="item">
            <a
              href="https://sass-lang.com/documentation/syntax/"
              target="_blank"
            >
              <i className="fa-brands fa-sass"></i>
              <p>Sass</p>
            </a>
          </li>
          <li className="item">
            <a
              href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
              target="_blank"
            >
              <i className="fa-brands fa-react"></i>
              <p>Bootstrap</p>
            </a>
          </li>
          <li className="item">
            <a href="https://www.javatpoint.com/java-tutorial" target="_blank">
              <i className="fa-brands fa-java"></i>
              <p>Java</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
