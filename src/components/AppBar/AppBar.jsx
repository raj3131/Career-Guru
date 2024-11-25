import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AppBar.css';

function AppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="app-bar">
      <div className="logo">
        <Link to="/" className="logo-link">Career Guru</Link>
      </div>
      
      <nav className={`nav-links ${isDrawerOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="#" className="nav-link">About</Link>
        <Link to="#" className="nav-link">Contact</Link>
      </nav>

      <div className="hamburger-menu" onClick={toggleDrawer}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </header>
  );
}

export default AppBar;
