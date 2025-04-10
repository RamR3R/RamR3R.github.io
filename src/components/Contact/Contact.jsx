"use client";
import React from "react";
import "./Contact.css";
import { customAnchor } from "../../utils/functions";

const Phone = "/contactImages/Phone.png";
const Email = "/contactImages/Email.png";
const LinkedIn = "/contactImages/LinkedIn.png";
const Github = "/contactImages/Github.png";

function Contact() {
  const sendto = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div>
        <div
          id="contact-github"
          className="contactCard"
          onClick={() => {
            sendto("https://github.com/ramR3R");
          }}
        >
          <img src={Github} alt="" />
          <h5>Github</h5>
          <p>RamR3R</p>
        </div>
        <div
          id="contact-linkedin"
          className="contactCard"
          onClick={() => {
            sendto("https://www.linkedin.com/in/ramR3R/");
          }}
        >
          <img src={LinkedIn} alt="LinkedIn" />
          <h5>Linkedin</h5>
          <p>Ramsundar Sivakumar</p>
        </div>
        <div
          id="contact-email"
          className="contactCard"
          onClick={() => {
            customAnchor("mailto:sendtoramsundar@gmail.com");
          }}
        >
          <img src={Email} alt="" />
          <h5>Email</h5>
          <p>sendtoramsundar@gmail.com</p>
        </div>
        <div
          id="contact-phone"
          className="contactCard"
          onClick={() => {
            customAnchor("tel:+919442535298");
          }}
        >
          <img src={Phone} alt="" />
          <h5>Phone</h5>
          <p>+91 9442535298</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
