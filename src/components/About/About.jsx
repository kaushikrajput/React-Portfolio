import React from "react";
import "./style.scss";
import img from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="center">
        <div className="image">
            <span>
              <img src={img} alt="" />
            </span>
        </div>
        <div className="text">
          <div className="card">
            <div className="card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1.0em"
                height="1.0em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 64 64"
                className="iconify"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ transform: "rotate(360deg)" }}
              >
                <circle cx="32" cy="32" r="30" fill="#ed4c5c"></circle>
              </svg>{" "}
              &nbsp;{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
                className="iconify"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
                style={{ transform: "rotate(360deg)" }}
              >
                <circle cx="18" cy="18" r="18" fill="#FDCB58"></circle>
              </svg>{" "}
              &nbsp;{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
                className="iconify"
                data-icon="twemoji:green-circle"
                data-inline="false"
                style={{ transform: "rotate(360deg)" }}
              >
                <circle cx="18" cy="18" r="18" fill="#78B159"></circle>
              </svg>
            </div>
            <div className="card-body">
              <br />
              <span className="wave">{"Hi "} {":)"} </span>
              <br />
              <br />
              {"👋"} &nbsp; Hi! I'm Kaushik and I'm pursuing Master's degree in
              Computer Application. I've enjoyed turning complex problems into
              simple, beautiful and intuitive designs. I possesss strong
              interpersonal skills and I am self motivated. I work efficiently
              both as an individual contributor as well as along with a team. I
              seek new challenges and try to think out-of-the-box while looking
              for creative solutions to a given problem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
