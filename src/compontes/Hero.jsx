import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero">
      <Header />

      <div className="hello-box jumbotron d-flex">
        <p className="intro d-flex justify-content-center">
          hi,
          <span className="name"> Horatious</span> here.{" "}
          <span className="carrot">|</span>
        </p>
      </div>
    </section>
  );
}
