import React from "react";
import "./style.scss";
import Navbar from "./component/navbar";
import HeroSection from "./component/cover";
import About from "./component/about";
import Skills from "./component/skills";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
    </>
  );
};

export default App;
