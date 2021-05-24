import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
    <a href="#about">About</a>
    <a href="#myWork">Work</a>
    <a href="#about">Contact</a>
    <a href={'./Resume.pdf'}>Resume</a>       
</nav>
<div class="headerOne">
    <div id="name"><h1>Kevin R. Hidalgo</h1></div>
    <img src={"./images/laptop.jpg"}></img>
</div>

    </header>
   
    
  );
}

export default Header;