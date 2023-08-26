import React, { useState } from "react";
import Bars_black from "../images/bars-black.png";
import Cross_black from "../images/cross-black.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-title">
          <p className="brand">Saksham</p>
        </div>
        <nav className={showNav && "active"} id="nav">
          <ul>
            <li>
              {/* <a href="#cover">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a href="#about">About</a>
            </li> */}
            {/* <li>
              <a href="#skills">Skills</a>
            </li> */}
            {/* <li><a href="" >Projects</a></li> */} {/* Todo in Future */}
            <li>
              {/* <a href="">Contact</a> */}
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="btn-toggle-grp">
          {showNav == false ? (
            <button className="btn-toggle" id="bar-btn" onClick={navToggle}>
              <img src={Bars_black} />
            </button>
          ) : (
            ""
          )}
          <button
            className={`btn-toggle ${showNav && "active"}`}
            id="cross-btn"
            onClick={navToggle}
          >
            <img src={Cross_black} />
          </button>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Navbar;
