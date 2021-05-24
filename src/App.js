import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer/Footer";

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
