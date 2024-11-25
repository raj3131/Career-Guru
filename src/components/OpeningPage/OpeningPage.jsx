import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobs } from '../Data/DataJobs'; // Importing jobs data
import './OpeningPage.css';

function OpeningPage() {
  const [userType, setUserType] = useState(""); // Fresher or Experienced
  const [qualification, setQualification] = useState("");
  const [fieldOfInterest, setFieldOfInterest] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [previousRoles, setPreviousRoles] = useState("");
  const [keyAchievements, setKeyAchievements] = useState("");
  const navigate = useNavigate();

  const qualifications = [...new Set(jobs.map((job) => job.qualification))];
  const fields = [...new Set(jobs.map((job) => job.field))];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userType,
      qualification,
      fieldOfInterest,
      yearsOfExperience: userType === "Experienced" ? yearsOfExperience : "",
      skills,
      previousRoles: userType === "Experienced" ? previousRoles : "",
      keyAchievements: userType === "Experienced" ? keyAchievements : "",
    };
    navigate("/jobs", { state: userData });
  };

  const handleAllJobsClick = () => {
    navigate("/jobs");
  };

  return (
    <div className="opening-page-container">
      {userType === "" ? (
        <div className="user-type-selection">
          <h1>Welcome to Career Guru</h1>
          <p>Select your profile to get started:</p>
          <div className="user-type-buttons">
            <button
              className="user-type-btn"
              onClick={() => setUserType("Fresher")}
            >
              <span>Fresher</span>
            </button>
            <button
              className="user-type-btn"
              onClick={() => setUserType("Experienced")}
            >
              <span>Experienced</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={`form-container ${userType.toLowerCase()}`}>
          <h2>{userType === "Fresher" ? "Fresher Details" : "Experienced Professional Details"}</h2>
          <form onSubmit={handleSubmit} className="job-search-form">
            <div className="form-group">
              <label htmlFor="qualification">Maximum Qualification:</label>
              <select
                id="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <option value="">Select Qualification (Optional)</option>
                {qualifications.map((qual) => (
                  <option key={qual} value={qual}>
                    {qual}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fieldOfInterest">Field of Interest:</label>
              <select
                id="fieldOfInterest"
                value={fieldOfInterest}
                onChange={(e) => setFieldOfInterest(e.target.value)}
              >
                <option value="">Select Field (Optional)</option>
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>

            {userType === "Experienced" && (
              <>
                <div className="form-group">
                  <label htmlFor="yearsOfExperience">Years of Experience:</label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    placeholder="Optional"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="previousRoles">Previous Job Roles:</label>
                  <input
                    type="text"
                    id="previousRoles"
                    value={previousRoles}
                    onChange={(e) => setPreviousRoles(e.target.value)}
                    placeholder="e.g., Software Engineer, Team Lead (Optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="keyAchievements">Key Achievements:</label>
                  <textarea
                    id="keyAchievements"
                    value={keyAchievements}
                    onChange={(e) => setKeyAchievements(e.target.value)}
                    placeholder="e.g., Led a team of 10, Improved app performance by 30% (Optional)"
                  ></textarea>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g., React, Java, Python (Optional)"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Find Jobs</button>
              <button type="button" className="all-jobs-btn" onClick={handleAllJobsClick}>
                All Jobs
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default OpeningPage;
