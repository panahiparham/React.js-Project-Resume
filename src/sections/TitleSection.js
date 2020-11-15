import React, { Component } from "react";

import data from "../data.json";
import { SocialIcon } from "react-social-icons";

import './TitleSection.css'

export default class TitleSection extends Component {
    
  render() {      
    return (
        <div className="title-section">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <div className="contact-links">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </div>
    );
  }
}
