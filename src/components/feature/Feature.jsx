import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="gpt__features-container__feature">
    <div className="gpt__features-container__feature-title">
      <h1>{title}</h1>
      <div />
    </div>
    <div className="gpt__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
