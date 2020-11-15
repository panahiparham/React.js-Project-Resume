import React, { Component } from "react";

import data from "../data.json";

import "./SkillSection.css";

import Skill from "./Skill";

export default class SkillSection extends Component {
  render() {
    return (
      <div className="skill-section">
        <h3>{data.sections[1].title}</h3>
        <div className="skills-wrapper">
          {data.sections[1].items.map((skill) => {
            return <Skill skill={skill} />;
          })}
        </div>
      </div>
    );
  }
}
