import React from "react";
import Hero from "./compontes/Hero";
import Projects from "./compontes/Projects";
import Footer from "./compontes/Footer";
import About from "./compontes/About";
import Tech from "./compontes/Tech";
import Contact from "./compontes/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
