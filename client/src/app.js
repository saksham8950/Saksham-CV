import React from "react";
import "./style.scss";

import { Route, Routes } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./home";
import Contact from "./component/contact";
import Footer from "./component/footer";

const App = () => {
  return (
    <>
      <Navbar />

      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>

      <Footer />
    </>
  );
};

export default App;
