import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Hero() {
  const [text, setText] = useState("");
  const message = "Hi, Horatious here";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero">
      <Header />

      <div className="hello-box jumbotron d-flex">
        <div className="intro d-flex justify-content-center">
          <div className="name">{text}</div>
        </div>
      </div>
    </section>
  );
}
