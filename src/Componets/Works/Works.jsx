import React from "react";
import "./Works.css";
import amazon from "../../img/amazon.png";
import facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <div className="works">
      <div className="w-left">
        <span>Works</span>
        {/* <span>Brands & Clients</span> */}
        <span>
          I web devloper for having the experiance of 9 month of the
          <br />
          I web devloper for having the experiance of 9 month of the
          <br />
          I web devloper for having the experiance of 9 month of the
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias
          cumque officiis ipsum, et aspernatur eum. Aspernatur sit sed
          laudantium soluta omnis ratione ad deleniti, optio, deserunt ab
          molestiae aut!
        </span>
        <div>
          <button className="button w-button">Hire Me</button>
        </div>
        <div
          className="blur w-blur1"
          style={{ background: " #ABF1FF94" }}
        ></div>
      </div>
      {/* 
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }} // Animate the rotation
          transition={{ duration: 3.5, type: "spring" }} // Set animation duration
          className="w-maincircle"
        >
          <div className="w-srcondcircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-srcondcircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-srcondcircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-srcondcircle">
            <img src={shopify} alt="" />
          </div>
          <div className="w-srcondcircle">
            <img src={facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle bluecircle"></div>
        <div className="w-backCircle yellowcircle"></div>
      </div> */}
    </div>
  );
};

export default Works;
