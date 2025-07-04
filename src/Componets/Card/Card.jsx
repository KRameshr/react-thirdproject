import React from "react";
import "./Card.css";
const Card = ({ Image, heading, detail }) => {
  return (
    <div className="card">
      <img src={Image} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">
        {" "}
        <a href="">Learn More</a>
      </button>
    </div>
  );
};

export default Card;
