import React from "react";
import me from "../img/me.png";

export default function About() {
  const handleOnLoad = (e) => {
    e.preventDefault();
  };

  return (
    <section id="about" className="space-section about">
      <div className="">
        <h2 className=" section-header space-section">
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          About
        </h2>

        <div className="about-box mt-4 p-2 d-flex">
          <p className="px-3 about-me text-start">
            I am a Full-Stack Web Developer based in Alpharetta, GA. I am
            focused on Web Development and Design while specializing in web apps
            and technical communications.
            <br />
            <br />
            My introduction to programming arrived around my 14th birthday; my
            dad showed me the basics of C++ in Visual Studio. I remember
            struggling to wrap my childish senses around OOP principles like
            'Classes' at our kitchen table, but I had one objective, build a
            math homework app. With that, I created the Homework Helper, Go Clo,
            and succeeded in teaching my friend Chase how to program a
            text-based game.
            <br />
            <br />
            Those days, and more alike, broaden my perspective on the
            fundamentals while largely influencing my understanding and
            technical communication skills. To this day, I continuously lean
            into my passion for learning and teaching new technologies. My past
            experiences have disciplined me to become a quick learner, problem
            solver, and valuable team player.
            <div className=" d-flex justify-content-center"></div>
          </p>
          <div className="about-img-figure d-flex justify-content-center">
            <img src={me} className="my-about-img" alt="photographed me" />
          </div>
        </div>
      </div>
    </section>
  );
}
