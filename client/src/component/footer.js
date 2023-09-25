import React from "react";
import ArrowUp from "./arrow-up";
import Github from "../images/github.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-left">
              <div className="footer-title">Saksham</div>
              <div className="footer-subtitle">
                Committed full stack developer dedicated to crafting seamless
                end-to-end web solutions.
              </div>
              <div className="footer-social">
                <a href="https://github.com/saksham8950">
                  <img src={Github} />{" "}
                </a>
              </div>
            </div>
            {/* <div className="footer-right">
              <div className="footer-title">social</div>
              <div className="footer-social">social-icons white</div>
            </div> */}
          </div>
          <hr />
          <div className="footer-copyright">
            <div className="footer-arrow-up">
              <ArrowUp />
            </div>
            <p>Made with ❤ by Saksham</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
