import React from "react";
import Hero from "./compontes/Hero";
import Projects from "./compontes/Projects";
import Footer from "./compontes/Footer";
import "./js/heroScript";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
