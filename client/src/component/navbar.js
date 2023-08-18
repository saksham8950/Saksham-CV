import React, { useState } from "react";
import Bars_black from "../images/bars-black.png";
import Cross_black from "../images/cross-black.png";

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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            {/* <li><a href="" >Projects</a></li> */} {/* Todo in Future */}
            <li>
              <a href="">Contact</a>
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
    </>
  );
};

export default Navbar;
