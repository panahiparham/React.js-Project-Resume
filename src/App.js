import React from "react";

import "./App.css";


import Container from "./components/Container";
import TitleSection from "./sections/TitleSection"
import AboutSection from "./sections/AboutSection"
import SkillSection from "./sections/SkillSection"
import FooterSection from "./sections/FooterSection"

function App() {
  return (
    <div className="App">


      <div className="navigation"></div>

      <Container>
        <TitleSection  />
        <AboutSection />
        <SkillSection />
        <FooterSection />
      </Container>

    </div>
  );
}

export default App;
