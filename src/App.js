// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OpeningPage from "./components/OpeningPage/OpeningPage"; // Import OpeningPage
import JobDetailsPage from "./components/JobDetails/JobDetailsPage"; // Ensure this component is created
import AppBar from "./components/AppBar/AppBar"; // Import the AppBar component
import JobsPage from "./components/Jobs/JobsPage";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

function App() {
  return (
    <Router>
      <AppBar /> {/* Include AppBar at the top */}
      <Routes>
        <Route path="/" element={<LandingPage/>} /> 
        <Route path="/OpeningPage" element={<OpeningPage />} /> 
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
