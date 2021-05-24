import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  card: {
textdecoration:"none",
fontweight: "bolder"
  }
}; 

function NavTabs() {

  const location = useLocation();

  return (
    
    <ul className="nav nav-tabs">
      <div style={styles.card}>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      </div>
    </ul>
      
  );
}

export default NavTabs;