import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

import "./Navbar.css";

function Navbar() {

 

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div>
      <div className="navContainer">
        {dimensions.width > 880 ? (
           <nav className="navbar pt-3  ">
           <a href="/" style={{ textDecoration: "none" }}>
             <div className="logo">
               <img
                 className="logo-img"
                 src={process.env.PUBLIC_URL + "/logo.svg"}
                 alt="logo"
               />
             </div>{" "}
           </a>
 
           <div className="navRightSide">
             <ul className="nav-links menu">
            
                 <li>
                   <a href="https://signup.zerodha.com/">Signup</a>
                 </li>
                 <li>
                   <a href="https://zerodha.com/about/">About</a>
                 </li>
 
                 <li>
                   <a href="https://zerodha.com/products/">Products</a>
                 </li>
                 <li>
                   <a href="https://zerodha.com/pricing/">Pricing</a>
                 </li>
 
                 <li>
                   <a href="https://support.zerodha.com/  ">Support</a>
                 </li>
               {/* </div> */}
             </ul>
           </div>
         </nav>
        ) : (
          <Hamburger />
        )}
      </div>
    </div>
  );
}

export default Navbar;
