import { Link } from "react-scroll";
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../containers/Login'

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }
  //login signup
  function loginSuccess(){
    alert("success!")
    //window.open("../containers/Login.js")
  }
  function signUpSuccess(){
    alert("success!")
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              Helping Hands
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact  
              </Link>
            </li>
            <li>
              <Link onClick ={loginSuccess}>
               <bottom  className="btn" style={{ cursor: "pointer" }}>
                      Sign Up
                </bottom>
             </Link>
            </li>
            <li>
             <Link  onClick ={loginSuccess}>
               <button className="btn" style={{ cursor: "pointer" }}>
                     Log in
               </button>
             </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
