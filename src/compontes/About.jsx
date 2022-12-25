import React from "react";

export default function About() {
  const handleOnLoad = (e) => {
    e.preventDefault();
  };

  return (
    <section id="about" className="space-section about">
      <div className="">
        <h2 className=" space-section">
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          About
        </h2>

        <div className="about-box mt-4 p-2">
          <p className="pr-3">
            I'm a software engineer and designer based in Atlanta. focused on
            computer networking, API consumption, integration, full-stack
            development, IoT devices, and everything in between. Additionally, I
            am a designer and tailor. My desgins inspiration stems from many
            similarites I observe in technical and fashion design; allowing me
            to bridge the gap for dynamiclly sophistocated tailored garments.
            <div className=" d-flex justify-content-center">
              <ul className="tools mr-3 ml-3">
                <span> Tools</span>
                <li>VS Code</li>
                <li>Git/Github</li>
                <li>Node.js</li>
                <li>React.js</li>
              </ul>

              <ul className="tech mr-3 ml-3">
                <span>Tech</span>
                <li>JavaScript</li>
                <li>Html/Css</li>
                <li>Java</li>
                <li>SQL/NoSQL</li>
              </ul>
            </div>
          </p>
          <div className="about-img-figure">
            <img
              src="/img/me.png"
              className="my-about-img"
              alt="photographed me"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
