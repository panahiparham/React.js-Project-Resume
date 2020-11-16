import React from "react";

import "./App.css";

import Container from "./components/Container";

import { Element } from "react-scroll";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div className="App">
      <Container>
        <Element name="homeArrow" className="homeArrow" />
        <TitleSection />
        <Element name="aboutArrow" className="aboutArrow" />
        <AboutSection />
        <Element name="skillsArrow" className="skillsArrow" />
        <SkillSection />
        <FooterSection />
      </Container>
    </div>
  );
}

export default App;
