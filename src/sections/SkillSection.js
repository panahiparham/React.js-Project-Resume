import React, { Component } from "react";

import data from "../data.json";

import "./SkillSection.css";

import Skill from "./Skill";
import Project from "./Project";

import DownIcon from "../components/DownIcon";

import { Link } from "react-scroll";


export default class SkillSection extends Component {
  render() {
    return (
        <div className="skill-section">

          
          <h3 className="skill-title">{data.sections[1].title}</h3>
          <div className="skills-wrapper">
            {data.sections[1].items.map((skill) => {
              return <Skill skill={skill} />;
            })}
          </div>

          <h3 className="projects-title">{data.sections[2].title}</h3>

          <div className="projects-wrapper">
            {data.sections[2].items.map((project) => {
              return <Project project={project} />;
            })}
          </div>

          <Link
          className="down-arrow"
          activeClass="active"
          to="homeArrow"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.up} />
        </Link>
        </div>
    );
  }
}
