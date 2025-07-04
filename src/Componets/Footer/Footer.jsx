import React from "react";
import "./Footer.css";

import wave from "../../img/wave.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <img src={instagram} alt="" />
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div>
          krameshr348@gmail.com | +91-8919003200 <br />
        </div>
        <div>&copy; {year}. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
