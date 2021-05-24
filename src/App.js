import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import Home from "./Components/pages/Home";
import Projects from "./Components/pages/Projects";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
   
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </div>
      <Footer/>
    </Router>
  );
}
export default App;

