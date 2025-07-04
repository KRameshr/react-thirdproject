import "./Services.css";
import React from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humbel from "../../img/humble.png";
import Card from "../Card/Card";
import resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laudantium perferendis ipsam excepturi aliquam fuga
          <br />
          repudiandae minus quaerat, optio quisquam ut, aperiam tempore tempora
          sit, itaque tenetur unde porro cupiditate?
        </span>
        <a href={resume} download>
          {/* <button className="button s-button">Download CV</button>
          <br />
          <button className="button s-button">Download CV</button> */}
        </a>
      </div>
      <div className="s-right">
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "7rem" }}
          transition={transition}
          className="cardsOne"
        >
          <Card
            Image={HeartEmoji}
            heading={"Vedio Editor"}
            detail={"Photoshop,PREMIER PRO,AfterEffect"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-15rem" }}
          whileInView={{ left: "-6rem" }}
          transition={transition}
          className="cardsTwo"
        >
          <Card
            Image={Glasses}
            heading={"Graphic Design"}
            detail={"Adobe Lighroom, Adobe Illustrator,Canvas"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
          className="cardsThree"
        >
          <Card
            Image={Humbel}
            heading={"Developer"}
            detail={"CSS, HTML,JAVA SCRIPT,REACT"}
          />
        </motion.div>
      </div>
      <div className="blur s-blur1" style={{ background: " #ABF1FF94" }}></div>
      <div
        className="blur s-blur2"
        style={{ background: " rgb(238 210 255)" }}
      ></div>
    </div>
  );
};

export default Services;
