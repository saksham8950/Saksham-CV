import React, { useState, useEffect } from "react";
import ArrowUp from "../images/arrow-up.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="btn-scroll-top"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <img src={ArrowUp} />
    </button>
  );
};

export default ScrollToTop;
