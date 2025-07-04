import React from "react";
import "./Floating.css";
const Floating = ({ Image, text1, text2 }) => {
  return (
    <div className="floating">
      <img src={Image} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default Floating;
