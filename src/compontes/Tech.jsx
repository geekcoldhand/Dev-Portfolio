import React from "react";
import mongo from "../img/skills/mongo.png";
import node from "../img/skills/node.png";
import react from "../img/skills/react.png";
import git from "../img/skills/git.png";
import js from "../img/skills/js.png";
import graphQl from "../img/skills/gql.png";
import mySQL from "../img/skills/mysql.png";
import html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import java from "../img/skills/java.png";
import boots from "../img/skills/bootstrap.png";

export default function Tech() {
  return (
    <div className=" d-flex p-3 justify-content-center flex-column">
      <h2 className="space-section section-header text-center " id="projects">
        {" "}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
        Projects
      </h2>
      <div className="d-flex justify-content-center">
        <div className="tech-box d-flex justify-content-evenly">
          {/* framework/lang */}
          <img className="skills" src={mongo} alt="MongoDB" />
          <img className="skills" src={node} alt="Node" />
          {/* add html and css */}

          <img className="skills" src={react} alt="React" />
          <img className="skills" src={graphQl} alt="GraphQl" />
          <img className="skills" src={mySQL} alt="MySQL" />
          <img className="skills" src={java} alt="Java" />
          <img className="skills" src={js} alt="Javascript" />

          <img className="skills" src={html} alt="html" />
          <img className="skills" src={css} alt="css" />
          <img className="skills" src={boots} alt="bootstrap" />

          {/* tools */}
          {/* add npm */}
          <img className="skills" src={git} alt="Git" />
        </div>
      </div>
    </div>
  );
}
