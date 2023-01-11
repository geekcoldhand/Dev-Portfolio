import React, { useState } from "react";
import Cards from "./Cards";

import socketIO from "../img/skills/socket.io.svg"
import whosapp from "../img//demos/Who's App.demo.gif"
import handleBars from "../img/skills/hb.png"
import mysql from "../img/skills/mysql.png"
import winendine from "../img//demos/DrinksDemo.gif"
import js from "../img/skills/js.png"
import express from "../img/skills/express.png"
import boots from "../img/skills/bootstrap.png";
import openWeather from "../img/skills/openWeather.png";
import jquery from "../img/skills/jQ.png";
import css from "../img/skills/css.png";
import react from "../img/skills/react.png";
import techTalk from "../img/demos/ttDemo.gif"
import weatherWheel from "../img/demos/Weather-Wheel-Demo.gif"
import portfolio from "../img/demos/portfolio-demo.gif"





export default function Projects() {
  const allProjects = [
    // WhosApp project
    {
      projectName: "WhO's App",
      logoImg: "🦉",
      demoGif: whosapp,
      gitLink: "https://github.com/geekcoldhand/Whos-App",
      siteLink: "https://whooooos-app.herokuapp.com/login",
      descript: "Real-time chatting application",
      id: 1223,
      tech1: socketIO,
      tech2: handleBars,
      tech3: express,
    },
    // Wine N Dine project
    {
      projectName: "Wine N Dine",
      logoImg: "🍷",
      demoGif: winendine,
      gitLink: "https://github.com/parsonjd/Wine-Dine",
      siteLink: "https://parsonjd.github.io/Wine-Dine/",
      descript: "Food & Cocktail filter search",
      id: 23344,
      tech1: handleBars,
      tech2: js,
      tech3: boots,
    },

    // Tech Talk
    {
      projectName: "Tech Talk",
      logoImg: "",
      demoGif: techTalk,
      gitLink: "https://github.com/geekcoldhand/Todays-Tech-Talk",
      siteLink: "",
      descript: "A blogging website for developers",
      id: 45432,
      tech1: handleBars,
      tech2: js,
      tech3: mysql,
    },
    // Weather Wheel
    {
      projectName: "Weather Wheel",
      logoImg: "☀️",
      demoGif: weatherWheel,
      gitLink: "https://github.com/geekcoldhand/Weather-Color-Wheel",
      siteLink: "https://geekcoldhand.github.io/Weather-Color-Wheel/",
      descript: "Open weather API",
      id: 34322,
      tech1: openWeather,
      tech2: jquery,
      tech3: css,
    },
    // Js quiz
    {
      projectName: "Portfolio",
      logoImg: "📝",
      demoGif: portfolio,
      gitLink: "https://github.com/geekcoldhand/Dev-Portfolio",
      siteLink: "https://geekcoldhand.github.io/Dev-Portfolio/",
      descript: "This portfolio",
      id: 56343,
      tech1: react,
      tech2: js,
      tech3: boots,
    },
  ];

  const [projects, setProject] = useState(allProjects);

  return (
    <section className="space-section  d-flex justify-content-center flex-column project-box">
      <Cards key={projects.id} projectCards={projects} />
    </section>
  );
}
