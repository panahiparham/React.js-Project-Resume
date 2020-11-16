import React, { Component } from "react";

import data from "../data.json";

import "./AboutSection.css";

import DownIcon from "../components/DownIcon";
import { Link } from "react-scroll";

export default class AboutSection extends Component {
  render() {
    return (
      <div className="about-section">
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>

        <Link
          className="down-arrow"
          activeClass="active"
          to="skillsArrow"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      </div>
    );
  }
}
