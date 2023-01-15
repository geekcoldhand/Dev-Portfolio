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
    <div className=" d-flex p-3 justify-content-center align-items-center flex-column">
      <h2 className="space-section section-header text-center" id="skills">
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
        Skills
      </h2>
      <div className="d-flex justify-content-center">
        <div className="tech-box d-flex justify-content-evenly">
          {/* framework/lang */}
          <div className="d-flex flex-column justify-content-center">
            <img className="skills" src={mongo} alt="MongoDB" />
            <label className="text-center" htmlFor="">
              MongoDB
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={node} alt="Node" />
            <label className="text-center" htmlFor="">
              Node
            </label>
          </div>
          {/* add html and css */}
          <div className="d-flex flex-column">
            <img className="skills" src={react} alt="React" />
            <label className="text-center" htmlFor="">
              React
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={graphQl} alt="GraphQl" />
            <label className="text-center" htmlFor="">
              GraphQL
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={mySQL} alt="MySQL" />
            <label className="text-center" htmlFor="">
              MySQL
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={java} alt="Java" />
            <label className="text-center" htmlFor="">
              Java
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={js} alt="Javascript" />
            <label className="text-center" htmlFor="">
              Javascript
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={html} alt="html" />
            <label className="text-center" htmlFor="">
              html
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={css} alt="css" />
            <label className="text-center" htmlFor="">
              CSS
            </label>
          </div>
          <div className="d-flex flex-column">
            <img className="skills" src={boots} alt="bootstrap" />
            <label className="text-center" htmlFor="">
              Bootstrap
            </label>
          </div>

          {/* tools */}
          {/* add npm */}
          <div className="d-flex flex-column">
            <img className="skills" src={git} alt="Git" />
            <label className="text-center" htmlFor="">
              Git
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
