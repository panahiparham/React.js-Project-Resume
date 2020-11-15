import React, { Component } from "react";
import data from "./data.json";
import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <div className="navigation"></div>
      <div className="home-page">
        <div className="title">
          <h1>{data.title}</h1>
        </div>

        <div className="sub-title">
          <h2>{data.subtitle}</h2>
        </div>
        <div className="contact-links">
          {Object.keys(data.links).map((key) => {
            return <SocialIcon url={data.links[key]} />;
          })}
        </div>
      </div>

      <div className="about-page">
        <h3>{data.sections[0].title}</h3>

        <p>{data.sections[0].items[0].content}</p>
      </div>
      <div className="skills-page">
        <h3>{data.sections[1].title}</h3>
        <div className="skills-wrapper">
          {data.sections[1].items.map((skill) => {
            return (
              <div className="skill">
                <div className="image-wrapper">
                  <img src={skill.content.image} />
                </div>
                <div className="skill-title-wrapper">
                  <h4>{skill.content.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
