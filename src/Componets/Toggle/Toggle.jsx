import React from "react";
import "./Toggle.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const hadleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle">
      <img src={moon} alt="" />
      <img src={sun} alt="" />

      <div
        className="t-button"
        onClick={hadleClick}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
