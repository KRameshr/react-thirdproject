import React from "react";

import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import insta from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../Floating/Floating";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>K Ramesh</span>
          <span>
            I web devloper for having the experiance of 9 month of the training
            of the{" "}
          </span>
        </div>
        <button className="button i-button">Hire ME</button>
        <div className="i-icon">
          <a href="">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "75%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          className="i-ff floating-dev"
        >
          <Floating Image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "-10%" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          className="i-fs floating-dev"
        >
          <Floating Image={thumbup} text1="vedio" text2="Editor" />
        </motion.div>
        <div
          className="blur i-blur1"
          style={{ background: " rgb(238 210 255)" }}
        ></div>
        <div className="blur i-blur2" style={{ background: " #C1F5FF" }}></div>
      </div>
    </div>
  );
};

export default Intro;
