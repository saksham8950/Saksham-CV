import React from "react";
import HeroSection from "./component/cover";
import About from "./component/about";
import Skills from "./component/skills";
import Projects from "./component/projects";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
