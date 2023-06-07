import React, { useState } from "react";
import "./Hamburger.css";
function Hamburger() {
  const [hamState, setHamState] = useState(false);

  const clickHamIcon = () => {
    setHamState(!hamState);
  };

  return (
    <div>
      <div className="hamburgerContainer border-bottom">
        <div className="logo">
          <img
            className="logo-img"
            src={process.env.PUBLIC_URL + "./logo.svg"}
            alt="logo"
          />
        </div>

        <div onClick={clickHamIcon} className="hamburgerIconContainer">
          <img
            className="hamburgerIcon"
            src={process.env.PUBLIC_URL + "hamburger-icon.png"}
            alt="menu"
          />
        </div>
      </div>

      {hamState && (
        <div className="hamburgerMenuContainer">
          <ul className="hamNav-links">
            <li>
              <a className="hamMenuLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hamMenuLink" href="/about">
                About
              </a>
            </li>
  
            <li>
              <a className="hamMenuLink" href="/jobs">
                Vacancies
              </a>
            </li>
            <li>
              <a className="hamMenuLink" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
