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
          <p className="pr-3 about-me">
            I'm a Full-Stack Web Developer based in Alpharetta. Focused on
            Full-Stack Web Development and Design. Specializing in Web Apps,
            User Experience and Technical communications. Intrested the
            application of Iot devices in various garments and assessories. In
            Addition to computer science, I am a garment engineer and tailor.
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
