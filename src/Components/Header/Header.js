import React from "react";
import "./Header.css";
import laptopLogo from "./laptop.jpg"
import resume from "./Resume.pdf"

function Header() {
  return (
    <header className="header">
      <nav>
    <a href="#about">About</a>
    <a href="#myWork">Work</a>
    <a href="#about">Contact</a>
    <a href={resume}>Resume</a>       
</nav>
<div class="headerOne">
    <div id="name"><h1>Kevin R. Hidalgo</h1></div>
    <img src={laptopLogo}></img>
</div>

    </header>
   
    
  );
}

export default Header;