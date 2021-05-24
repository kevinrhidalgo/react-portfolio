import React from "react";
import "../Home/About.css"
import linkedn from "./linkedn.png"
import email from "./IMG_0443.PNG"
import phone from "./IMG_0444.PNG"
import github from "./github.PNG"
import ig from "./ig.PNG"

function Home() {
  return (
    <section>
   

    <div class="sectionOne">
      <div id="about"> <h1>About.</h1> </div>
 
    <p>Hi, if you are reading this than that means you are either grading my work or here to get to know me a little. My name is Kevin Hidalgo and I am a web developer in the making and a current full-time student 
        at the UCF coding bootcamp. I was born and raised in the Bronx, New York until August of 2019, in which I moved to Orlando, Florida. </p>
        <p>Growing up I always had two career paths I wanted to pursue, coder or cardiologist. Prior to deciding between the two, I chose to pursue a career in medicine. I got as far as my junior year in which it was than I made the difficult decision to 
        change career paths due to some unfortunate events. Thanks to a friend, it was he who introduced me to the concept of a coding bootcamp to jumpstart my career in web development.</p>
          <p> Though i am inexperienced, I have alot of aspirations to continue learning various languages while also building my own applications from my pocket of ideas that i believe has potential; Hey! it doesn't hurt to dream big.  </p>
  </div> 

  <div class="body">
        <div class="paper">
      <h1>Contact <br></br>me.</h1>
    </div>
    <ul class="numbers" role="list">
      <li class="number" role="listitem">
        <div class="link-wrapper">
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <img class="contactList" src={linkedn}></img>
          <a href="https://www.linkedin.com/in/kevin-hidalgo-a6a725205/" aria-label="Linkedn profile">@kevin_hidalgo</a>
        </div>
      </li>
  
      <li class="number" role="listitem">
        <div class="link-wrapper">
          <i class="fab fa-email" aria-hidden="true"></i>
          <img class="contactList" src={email}></img>
          <a href = "mailto: abc@example.com">kevinrhidalgo@yahoo.com</a>
        </div>
      </li>
      <li class="number" role="listitem">
        <div class="link-wrapper">
          <i class="fab fa-number" aria-hidden="true"></i>
          <img class="contactList" src={phone}></img>
          <a href= "tel:" aria-label="Instagram profile">646.285.5696</a>
        </div>
      </li>
      <li class="number" role="listitem">
        <div class="link-wrapper">
          <i class="fab fa-github" aria-hidden="true"></i>
          <img class="contactList" src={github}></img>
          <a href="https://github.com/kevinrhidalgo" aria-label="GitHub profile">@kevinrhidalgo</a>
        </div>
      </li>
      <li class="number" role="listitem">
        <div class="link-wrapper">
          <i class="fab fa-instagram" aria-hidden="true"></i>
          <img class="contactList" src={ig}></img>
          <a href="https://www.instagram.com/kevin.hidalgo/" aria-label="Instagram">@kevin.hidalgo</a>
        </div>
      </li>
    </ul>
  </div>
  

</section>
    
  );
}

export default Home;