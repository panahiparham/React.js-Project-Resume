import React, { Component } from "react";

import "./Project.css";

export default class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project">
          
        <div className="project-title">
          <h4><a href={project.content.link}>{project.content.title}</a></h4>
        </div>
        <div className="project-description">
          <p>{project.content.description}</p>
        </div>
      </div>
    );
  }
}
