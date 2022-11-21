import React from "react";
import Cards from "./Cards";

export default function Projects() {
  const projects = [
    // whosApp project
    {
      projectName: "WhosApp",
      logoImg: "",
      demoGif: "",
      gitLink: "",
      siteLink: "",
      descript: "",
    },
    // project
    {
      projectName: "",
      logoImg: "",
      demoGif: "",
      gitLink: "",
      siteLink: "",
      descript: "",
    },
  ];

  return (
    <div className="content-card-style project-box">
      {/* all project cards */}
      {projects.map((i) => {
        <Cards info={i} />;
      })}
    </div>
  );
}
