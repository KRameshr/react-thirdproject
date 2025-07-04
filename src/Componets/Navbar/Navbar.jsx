import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">K Ramesh</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>

            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>

            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experiance</li>
            </Link>

            {/* <Link
              spy={true}
              to="Testimonial"
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li>Testimonials</li>
            </Link> */}
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          {" "}
          <button className="button n-button"> Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
