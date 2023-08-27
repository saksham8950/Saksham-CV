import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/metroui.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const Notification = (msg, type) => {
    setTimeout(function () {
      new Noty({
        text: msg,
        type: type,
        timeout: 3000, //false default
        theme: "metroui", // mint default
        layout: "topCenter", //default
      }).show();
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Notification("Please fill in all fields.", "error");
      return;
    }

    axios
      .post("http://localhost:4000/send-message", { name, email, message })
      .then((result) => {
        Notification("Message Sent.", "success");
        navigate("/"); // Redirect to the home page
        window.scrollTo({ top: 0, behavior: "smooth" }); //Scroll To Top of the page
        // console.log("send = ", result);
      })
      .catch((err) => {
        Notification("Error. Please try again.", "error");
        // console.log("Error in Sending Message = ", err);
      });
  };

  return (
    <>
      <div className="contact-section">
        <div className="contact-wrapper">
          <p className="contact-title">Contact</p>
          <p className="contact-subtitle">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              ></input>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
                // cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="form-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
