import React from "react";
import Header from "./Header";

//hero
const heroText = document.getElementById("hero-text");
const heroBox = document.getElementById("hero-box");
//projects
const projectTarget = document.getElementById("projects");
const allCards = document.querySelectorAll(".my-card");

//hero animations
const content = "hi, Horatious Harris here";
// grab each individual letter
// let render = $("<span>" + content.split("").join("</span><span>") + "</span>");

// render
//   .hide()
//   .addClass("intro")
//   .appendTo(heroText)
//   .each(function (i) {
//     console.log("the this", $(this)[0].textContent);

//     $(this)
//       .delay(100 * i)
//       .css({
//         display: "inline",
//         opacity: 0,
//       })
//       .animate(
//         {
//           opacity: 1,
//         },
//         100
//       );
//   });
let options = {
  rootMargin: "0px",
  threshold: 0.5,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("isIntersecting: ", entry.isIntersecting);

    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-card");

      entry.target.classList.add("show-card-right");
    }
  });
  console.log("entries Intersecting: ", entries);
}, options);

allCards.forEach((card) => observer.observe(card));

export default function Hero() {
  return (
    <section class="hero">
      <Header />

      <div class="hello-box jumbotron d-flex">
        <p class="intro d-flex justify-content-center">
          hi,
          <span class="name"> Horatious</span> here.{" "}
          <span class="carrot">|</span>
        </p>
      </div>
    </section>
  );
}
