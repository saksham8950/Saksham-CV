import React from "react";

const Contact = () => {
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
            <form method="" action="" className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="form-input"
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="form-input"
              ></input>
              <textarea
                name="message"
                placeholder="Enter Your Message"
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
