import React from "react";
import "../styles/ProjectCard.css"
function Projects() {
  return (
    <article class="sectionTwo" id="myWork">
    <h1 id="work">Projects</h1>
    <div class= "cardSection">

    <div className="myProjects">  
    <div class="card">
      <img class="card-img-top" src={"./images/dayplanner.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Day Planner</h5>
        <p class="card-text">Your Day planner, where you can create a planner for you day.</p>
      </div>
      <div class="cardLinks">
        <a href="https://github.com/kevinrhidalgo/Homework-5-TheDayPlanner" class="card-link">Repo</a>
        <a href="https://kevinrhidalgo.github.io/Homework-5-TheDayPlanner/" class="card-link">App</a>
      </div>
    </div>
  
    
    <div class="card">
      <img class="card-img-top" src={"./images/pwgenerator.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Password Generator</h5>
        <p class="card-text">You can generate a needed password of choice for your next account.</p>
      </div>
      <div class="cardLinks">
        <a href="https://github.com/kevinrhidalgo/Homework-3-PasswordGenerator" class="card-link">Repo</a>
        <a href="https://kevinrhidalgo.github.io/Homework-3-PasswordGenerator/" class="card-link">App</a>
      </div>
    </div>  
   
    
    <div class="card">
      <img class="card-img-top" src={"./images/jaunt.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Jaunt</h5>
        <p class="card-text">An all for one application where you can create a route with gas prices appeared based on where you are at.</p>
      </div>
     <div class="cardLinks">
        <a href="https://github.com/kevinrhidalgo/SuperGroup-ProjectOne-" class="card-link">Repo</a>
        <a href="https://myshelfi.herokuapp.com/" class="card-link">App</a>
      </div>
    </div>
 </div>   
 <div className="myProjects">
    <div class="card">
      <img class="card-img-top" src={"./images/shelfi.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Shelfi.</h5>
        <p class="card-text"> A library application where you can search for your books of choice in which you want to read and plan to read.</p>
      </div>
      <div class="cardLinks">
        <a href="https://github.com/mascarelloa/shelfi" class="card-link">Repo</a>
        <a href="https://myshelfi.herokuapp.com/" class="card-link">App</a>
      </div>
      </div>

      <div class="card">
      <img class="card-img-top" src={"./images/underC.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Coming Soon!</h5>
        <p class="card-text">Under Construction.</p>
      </div>
     <div class="cardLinks">
        <a href="" class="card-link">Repo</a>
        <a href="" class="card-link">App</a>
      </div>
    </div>
    
    <div class="card">
      <img class="card-img-top" src={"./images/underC.jpg"} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Coming Soon!</h5>
        <p class="card-text">Under Construction.</p>
      </div>
     <div class="cardLinks">
        <a href="" class="card-link">Repo</a>
        <a href="" class="card-link">App</a>
      </div>
    </div>

</div>
    
  
    
</div>
    
    

</article>
  );
}

export default Projects;