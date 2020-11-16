import React, { Component } from "react";

import './NavButton.css'

import { Link } from "react-scroll";


export default class NavButton extends Component {
    
  render() {
    let { arrow, name, className } = this.props

    if(!className) {
        className = ``
    }

    return (
        <div className={`nav-btn ${className}`}>
        <Link
          activeClass="active"
          to={arrow}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          {name}
        </Link>
      </div>
    );
  }
}
