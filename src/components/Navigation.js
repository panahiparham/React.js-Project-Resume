import React, { Component } from "react";

import "./Navigation.css";

import { Link } from "react-scroll";

export default class Navigation extends Component {
  // bg_day : #9dddff
  // bg_night : #1a273d

  // fg1_day : #e9f4fa
  // fg1_night : #9aabb4

  // fg2_day : #7dd190
  // fg2_night : #4e835a

  state = {
    bg_day: "#9dddff",
    bg_night: "#1a273d",
    fg1_day: "#e9f4fa",
    fg1_night: "#9aabb4",
    fg2_day: "#7dd190",
    fg2_night: "#4e835a",
  };
  changeTheme = () => {
    if(document.documentElement.style.getPropertyValue('--first-in-color') === this.state.fg1_day) {
      document.documentElement.style.setProperty('--first-in-color',this.state.fg1_night);
    } else {
      document.documentElement.style.setProperty('--first-in-color',this.state.fg1_day);
    }

    if(document.documentElement.style.getPropertyValue('--main-out-color') === this.state.bg_day) {
      document.documentElement.style.setProperty('--main-out-color',this.state.bg_night);
    } else {
      document.documentElement.style.setProperty('--main-out-color',this.state.bg_day);
    }

    if(document.documentElement.style.getPropertyValue('--second-in-color') === this.state.fg2_day) {
      document.documentElement.style.setProperty('--second-in-color',this.state.fg2_night);
    } else {
      document.documentElement.style.setProperty('--second-in-color',this.state.fg2_day);
    }

    // let main_out = document.documentElement.style.getPropertyValue('--main-out-color');
    // let first_in_color = document.documentElement.style.getPropertyValue('--first-in-color');
    // this.setState({
    //   main_out_color: document.documentElement.style.getPropertyValue(
    //     "--main-out-color"
    //   ),
    // });

    // console.log(this.state.main_out_color);

    // document.documentElement.style.setProperty('--first-in-color',this.first_in_color);
    // this.setState({first_in_color: document.documentElement.style.getPropertyValue('--first-in-color')});

    // document.documentElement.style.setProperty('--main-out-color',this.state.main_out_color);

    // this.setState({first_in_color: x});

    // document.documentElement.style.setProperty('--main-out-color',this.state.first_in_color);

    // if (this.state.color === '#1a273d'){
    //   this.setState({color: x});
    // } else {
    //   this.setState({color: '#1a273d'});
    // }

    // console.log(x)
  };

  render() {
    return (
      <div className="nav">
        <div className="navigation">
          <div className="nav-option">
            <Link
              activeClass="active"
              to="homeArrow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Home
            </Link>
          </div>

          <div className="nav-option">
            <Link
              activeClass="active"
              to="aboutArrow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Link>
          </div>

          <div className="nav-option">
            <Link
              activeClass="active"
              to="skillsArrow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Skills
            </Link>
          </div>

          <div onClick={this.changeTheme} className="nav-option">
            NightMode
          </div>
        </div>
      </div>
    );
  }
}
