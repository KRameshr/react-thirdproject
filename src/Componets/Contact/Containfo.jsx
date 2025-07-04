import React, { useRef, useState } from "react";
import "./Containfo.css";
import emailjs from "@emailjs/browser";

const Containfo = () => {
  const form = useRef();
  const [Done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("template--ddeed", "template_a69390p", form.current, {
        publicKey: "dk9QCD1gYJVIOkbKb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.reload();
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contacinfo-wrapper" id="Contact">
      <div className="c-left">
        <div className="c-name">
          <span>Get in touch</span>
          <span>Contact Me</span>
          <div className="blur c-blur1" style={{ background: "skyblue" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} action="#" method="#" onSubmit={sendEmail}>
          <input
            id="Username"
            type="text"
            name="Username"
            className="user"
            placeholder="Name"
          />
          <input
            id="Useremail"
            type="email"
            name="Useremail"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="userMessage"
            id="user"
            className="user "
            placeholder="Message"
          ></textarea>
          <input type="submit" className="button" value="Send" />
          <span>{Done && "Thank You Contact"}</span>
          <div
            className="blur c-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Containfo;
