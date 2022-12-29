import React from "react";

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
        <div className="tech-box ">
          {/* framework/lang */}
          <img className="skills" src="/img/skills/mongo.png" alt="MongoDB" />
          <img className="skills" src="/img/skills/node.png" alt="Node" />
          {/* add html and css */}

          <img className="skills" src="/img/skills/react.png" alt="React" />
          <img className="skills" src="/img/skills/gql.png" alt="GraphQl" />
          <img className="skills" src="/img/skills/mysql.png" alt="MySQL" />
          <img className="skills" src="/img/skills/java.png" alt="Java" />
          <img className="skills" src="/img/skills/js.png" alt="Javascript" />

          <img className="skills" src="/img/skills/html.png" alt="html" />
          <img className="skills" src="/img/skills/css.png" alt="css" />
          {/* tools */}
          {/* add npm */}
          <img className="skills" src="/img/skills/git.png" alt="Git" />
        </div>
      </div>
    </div>
  );
}
