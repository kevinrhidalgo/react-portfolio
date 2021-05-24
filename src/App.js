import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Home from "../src/pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";


function App() {
  return (
   
    <Router>
      <NavTabs />
      <div> 
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </div>
      <Footer/>
    </Router>
    
  );
}
export default App;

