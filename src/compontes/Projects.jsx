import React, { useState } from "react";
import Cards from "./Cards";

export default function Projects() {
  const allProjects = [
    // WhosApp project
    {
      projectName: "WhO's App",
      logoImg: "🦉",
      demoGif: "/img/demos/Who's App.demo.gif",
      gitLink: "https://github.com/geekcoldhand/Whos-App",
      siteLink: "https://whooooos-app.herokuapp.com/login",
      descript: "Real-time chatting application",
      id: 1223,
      tech1: "/img/skills/socket.io.svg",
      tech2: "/img/skills/hb.png",
      tech3: "/img/skills/express.png",
    },
    // Wine N Dine project
    {
      projectName: "Wine N Dine",
      logoImg: "🍷",
      demoGif: "/img/demos/DrinksDemo.gif",
      gitLink: "https://github.com/parsonjd/Wine-Dine",
      siteLink: "https://parsonjd.github.io/Wine-Dine/",
      descript: "Food & Cocktail filter search",
      id: 23344,
      tech1: "/img/skills/hb.png",
      tech2: "/img/skills/js.png",
      tech3: "/img/skills/bootstrap.png",
    },

    // Tech Talk
    {
      projectName: "Tech Talk",
      logoImg: "",
      demoGif: "/img/demos/tTDEMO.gif",
      gitLink: "https://github.com/geekcoldhand/Todays-Tech-Talk",
      siteLink: "",
      descript: "A blogging website for developers",
      id: 45432,
      tech1: "/img/skills/hb.png",
      tech2: "/img/skills/js.png",
      tech3: "/img/skills/mysql.png",
    },
    // Weather Wheel
    {
      projectName: "Weather Wheel",
      logoImg: "☀️",
      demoGif: "/img/demos/Weather-Wheel-Demo.gif",
      gitLink: "https://github.com/geekcoldhand/Weather-Color-Wheel",
      siteLink: "https://geekcoldhand.github.io/Weather-Color-Wheel/",
      descript: "Open weather API",
      id: 34322,
      tech1: "/img/skills/openWeather.png",
      tech2: "/img/skills/jQ.png",
      tech3: "/img/skills/css.png",
    },
    // Js quiz
    {
      projectName: "Portfolio",
      logoImg: "📝",
      demoGif: "/img/demos/portfolio-demo.gif",
      gitLink: "https://github.com/geekcoldhand/Dev-Portfolio",
      siteLink: "https://geekcoldhand.github.io/Dev-Portfolio/",
      descript: "This portfolio",
      id: 56343,
      tech1: "/img/skills/react.png",
      tech2: "/img/skills/js.png",
      tech3: "/img/skills/bootstrap.png",
    },
  ];

  const [projects, setProject] = useState(allProjects);

  return (
    <section className="space-section  d-flex justify-content-center flex-column project-box">
      <Cards key={projects.id} projectCards={projects} />
    </section>
  );
}
