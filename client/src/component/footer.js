import React from "react";
import ArrowUp from "./arrow-up";

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
            </div>
            <div className="footer-right">
              {/* <div className="footer-title">social</div>
              <div className="footer-social">social-icons white</div> */}
              {/* <button className="btn-scroll-top">
                <img src={ArrowUp} />
              </button> */}
              <ArrowUp />
            </div>
          </div>
          <hr />
          <div className="footer-copyright">Made with ❤ by Saksham</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
