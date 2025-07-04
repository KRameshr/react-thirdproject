import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";
import Intro from "./Componets/Introd/Intro";
import Services from "./Componets/Services/Services";
import Experiance from "./Componets/Experiance/Experiance";
import Works from "./Componets/Works/Works";
import Portfolio from "./Componets/Portfolio/Portfolio";
// import Testimonial from "./Componets/Testimonial/Testimonial";
import Containfo from "./Componets/Contact/Containfo";
import Footer from "./Componets/Footer/Footer";
import { themeContext } from "./Context";
const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Works />
      <Portfolio />
      {/* <Testimonial /> */}
      <Containfo />
      <Footer />
    </div>
  );
};

export default App;
