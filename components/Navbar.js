import React, { useState, useEffect } from "react";
import "../Navbar.css";
function Navbar() {
  const [click, setState] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navbarHandler = () => {
    setState(!click);
  };

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled != 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <div className={`Navbar ${scroll && "shadow"}`}>
      <div className="navbar">
        <div className="navbar_links">
          <img src="Images/logo.png" alt="" />
          <p>Home</p>
          <p>
            Company <select name="" id=""></select>
          </p>
          <p>
            Learn <select name="" id=""></select>
          </p>
          <p>
            Legal <select name="" id=""></select>
          </p>
        </div>
        <div className="navbar_buttons">
          <button type="button" className="btn btn-outline-primary btn-block">
            Login
          </button>
          <button type="button" className="btn btn-primary btn-block">
            Signup
          </button>
        </div>
        <div className="hamburger" onClick={navbarHandler}>
          <hr />
          <hr />
          <hr />
          <div className={`mobile ${click ? "display" : ""}`}>
            <div className="navbar_linksM">
              <p>Home</p>
              <p>
                Company <select name="" id=""></select>
              </p>
              <p>
                Learn <select name="" id=""></select>
              </p>
              <p>
                Legal <select name="" id=""></select>
              </p>
            </div>
            <div className="navbar_buttonsM">
              <button
                type="button"
                className="btn btn-outline-primary btn-block"
              >
                Login
              </button>
              <button type="button" className="btn btn-primary btn-block">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
