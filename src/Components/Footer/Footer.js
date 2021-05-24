import React from "react";
import "../Footer/Footer.css";
import myLogo from "./logo.jpg"



function Footer() {
  return (
   
    <footer>     
    <p> Copyright © 2021 Kevin Hidalgo. <img src={myLogo}></img> </p>
</footer>  
    
  );
}

export default Footer;