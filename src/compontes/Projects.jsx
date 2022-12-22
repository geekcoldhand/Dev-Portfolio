import { React, useState } from "react";
import Cards from "./Cards";
const cardListBox = await document.getElementById("card-list");
const allCards = await document.querySelectorAll("cards-box");

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
  //projects

  console.log("all cards length ", allCards.length);
  //hero animations

  // for observer obj
  let options = {
    rootMargin: "0px",
    // % on the screen until it animates
    threshold: 0.5,
  };
  // for projects animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("isIntersecting: ", entry.isIntersecting);

      // if (entry.isIntersecting) {
      //   console.log("card removed");
      //   entry.target.classList.remove("hide-card");
      //   entry.target.classList.add("show-card");
      //   console.log("card shown");
      // }
    });
    console.log("entries Intersecting: ", entries);
  }, options);
  console.log("observer", observer);
  // loop each DOM element to access observer
  allCards.forEach((card) => observer.observe(card));

  console.log("hero script ran");

  return (
    <section
      id="projects"
      className="space-section all-projects d-flex justify-content-center"
    >
      <div className="content-card-style project-box">
        <Cards projectCards={projects} />
      </div>
    </section>
  );
}
