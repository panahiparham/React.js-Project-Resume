import React, { Component } from "react";

import "./Skill.css";

export default class Skill extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="skill">
        <div className="image-wrapper">
          <img src={skill.content.image} alt="skill icon"/>
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
