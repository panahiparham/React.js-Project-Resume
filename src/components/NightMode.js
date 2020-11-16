import React, { Component } from "react";

import "./NightMode.css";

export default class Container extends Component {
  state = {
    bg_night: "#9dddff",
    bg_day: "#1a273d",
    fg1_night: "#e9f4fa",
    fg1_day: "#9aabb4",
    fg2_night: "#7dd190",
    fg2_day: "#4e835a",
  };



  changeTheme = () => {
    if (
      document.documentElement.style.getPropertyValue("--first-in-color") ===
      this.state.fg1_day
    ) {
      document.documentElement.style.setProperty(
        "--first-in-color",
        this.state.fg1_night
      );
    } else {
      document.documentElement.style.setProperty(
        "--first-in-color",
        this.state.fg1_day
      );
    }

    if (
      document.documentElement.style.getPropertyValue("--main-out-color") ===
      this.state.bg_day
    ) {
      document.documentElement.style.setProperty(
        "--main-out-color",
        this.state.bg_night
      );
    } else {
      document.documentElement.style.setProperty(
        "--main-out-color",
        this.state.bg_day
      );
    }

    if (
      document.documentElement.style.getPropertyValue("--second-in-color") ===
      this.state.fg2_day
    ) {
      document.documentElement.style.setProperty(
        "--second-in-color",
        this.state.fg2_night
      );
    } else {
      document.documentElement.style.setProperty(
        "--second-in-color",
        this.state.fg2_day
      );
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div onClick={this.changeTheme} className="night-mode">
        NightMode
      </div>
    );
  }
}
