import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <>
      <div className="hero-section" id="home">
        <div className="hero-wrapper">
          <p className="title">Full Stack Developer</p>
          <p className="sub-title">
            Full stack developer eager to create seamless web solutions from end
            to end.
          </p>
          {/* <p className="sub-title">MERN stack Developer</p> todo in Future */}
          <a href="mailto:saksham.official174@gmail.com">
            <button className="hero-btn">Contact Me</button>
          </a>
        </div>
        {/* <div className="hero-img"><img src="" className="" alt="Cover Image"></img></div> ToDo in the Future, Side Image if to be add */}
      </div>
    </>
  );
};

export default Cover;
