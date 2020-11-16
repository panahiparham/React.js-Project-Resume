import React  from "react";

import './DownIcon.css'

const DownIcon = (props) => {
  return (
    <div>
      <img
        src={props.icon}
        style={{
          maxWidth: "30PX",
        }}
        alt="arrow"
      />
    </div>
  );
};

export default DownIcon;