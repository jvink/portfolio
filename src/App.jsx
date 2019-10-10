import React from "react";
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";

const App = () => {
  return (
    <div id="root">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
