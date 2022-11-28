import { React, useState } from "react";
import Cards from "./Cards";

export default function Projects() {
  const allProjects = [
    // WhosApp project
    {
      projectName: "WhO's App",
      logoImg: "🦉",
      demoGif: "../../public/img/demos/Who's App.demo.gif",
      gitLink: "https://github.com/geekcoldhand/Whos-App",
      siteLink: "https://whooooos-app.herokuapp.com/login",
      descript: "Real-time chatting application",
    },
    // Wine N Dine project
    {
      projectName: "Wine N Dine",
      logoImg: "🍷",
      demoGif: "../../",
      gitLink: "https://github.com/parsonjd/Wine-Dine",
      siteLink: "https://parsonjd.github.io/Wine-Dine/",
      descript: "Food & Cocktail filter search",
    },
    // Weather Wheel
    {
      projectName: "Weather Wheel",
      logoImg: "☀️",
      demoGif: "../../public/img/demos/Weather-Wheel-Demo.gif",
      gitLink: "https://github.com/geekcoldhand/Weather-Color-Wheel",
      siteLink: "https://geekcoldhand.github.io/Weather-Color-Wheel/",
      descript: "Open weather API",
    },
    // Two-Due
    {
      projectName: "Two-Due",
      logoImg: "📅",
      demoGif: "../../public/img/demos/two-due.gif",
      gitLink: "https://github.com/geekcoldhand/TwoDue-Task-Manager",
      siteLink: "https://geekcoldhand.github.io/TwoDue-Task-Manager/",
      descript: "A simple TODO application",
    },
    // Js quiz
    {
      projectName: "Dynamic JS Quiz",
      logoImg: "📝",
      demoGif: "../../public/img/demos/Js-quiz.gif",
      gitLink: "https://github.com/geekcoldhand/js-dynamic-quiz",
      siteLink: "https://geekcoldhand.github.io/js-dynamic-quiz/",
      descript: "Timed javascript quiz",
    },
  ];

  const [projects, setProject] = useState(allProjects);
  return (
    <section className="space-section all-projects">
      <div className="content-card-style project-box">
        <Cards projectCards={projects} />
      </div>
    </section>
  );
}
