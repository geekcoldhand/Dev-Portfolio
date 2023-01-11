import React, { useState, useRef, useLayoutEffect } from "react";
import Header from "./Header";
import gsap from "gsap";


export default function Hero() {
  const [text, setText] = useState("");
  const [rocket, setRocket] = useState();
  const rocketRef = useRef();
  const flameRef = useRef();

  let tlm;
  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(rocketRef); // { current: div.box }

    tlm = gsap.timeline({});

    tlm.to(rocketRef.current, {
      duration: 0.4,
      scale: 1.2,
    });
    tlm.to(flameRef.current, {
      duration: 0.1,
      opacity: 0,
      color: "#77b599",
    });
    tlm.to(flameRef.current, {
      opacity: 1,
      color: "white",
      scale: 1.1,
      translateY: 0.5,
      translateX: -.5,
    });

    tlm.to(rocketRef.current, {
      translateY: -450,
      translateX: 1150,
      opacity: 0.2,
      duration: .5,
      scale: 0.1,
    });
    tlm.to(flameRef.current, {
      opacity: 1,
      color: "#77b599",
    });
    tlm.to(rocketRef.current, {
      opacity: .1,
      translateY: 450,
      translateX: -750,
      duration: 0.5,
    });
    tlm.to(rocketRef.current, {
      opacity: 1,
      scale: 1,
      translateY: 0,
      translateX: 0,
    });
    tlm.to(flameRef.current, {
      opacity: 0,
      translateY: -1,
      translateX: 0.5,
    });
  });

  const handleClick = () => {
    tlm.resume();
  };

  return (
    <section className="hero">
      <Header />

      <div className="hello-box jumbotron d-flex flex-column align-items-center">
        <span className="hi text-start">Hi, my name is</span>

        <div className="intro d-flex flex-column justify-content-center ">
          <div className="name">Horatious Harris</div>

          <p className="hero-summary text-center mx-auto">
            I'm a Computer Scientist focused on <span className="highlight">
            Full-Stack Web Development and Design
            </span>
            . Specializing in Web Apps,
            User Experience and Technical communications.
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="170"
          fill="currentColor"
          onClick={handleClick.bind(this, 1)}
          className="bi bi-rocket-takeoff rocket-ship"
          viewBox="0 0 16 16"
          ref={rocketRef}
        >
          <path
            className="shipWindow"
            d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"
          />
          <path
            className="shipBody"
            d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"
          />
          <path
            className="shipFire"
            ref={flameRef}
            d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"
          />
        </svg>
      </div>
    </section>
  );
}
