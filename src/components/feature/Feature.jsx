import React from "react";
import "./feature.css";

const feature = ({ title, text }) => {
  return (
    <div className="gpt__feature">
      <div className="gpt__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default feature;
