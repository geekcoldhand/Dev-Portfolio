//hero
const heroText = document.getElementById("hero-text");
const heroBox = document.getElementById("hero-box");
//projects
const cardListBox = document.getElementById("card-list");
const allCards = document.querySelectorAll("cards-box");

console.log("all cards length ", allCards.length);
//hero animations
const content = "hi, Horatious Harris here";
// grab each individual letter
// let render = $("<span>" + content.split("").join("</span><span>") + "</span>");

// for observer obj
let options = {
  rootMargin: "0px",
  // % on the screen until it animates
  threshold: 0.5,
};
// for projects animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("isIntersecting: ", entry.isIntersecting);

    if (entry.isIntersecting) {
      console.log("card removed");
      entry.target.classList.remove("hide-card");
      entry.target.classList.add("show-card");
      console.log("card shown");
    }
  });
  // console.log("entries Intersecting: ", entries);
}, options);
console.log("observer", observer);
// loop each DOM element to access observer
allCards.forEach((card) => observer.observe(card));

console.log("hero script ran");
