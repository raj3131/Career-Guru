import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jobs } from "../Data/DataJobs";
import "./JobsPage.css";

function JobsPage() {
  const { state } = useLocation();
  const { qualification, fieldOfInterest, yearsOfExperience, skills } = state || {};
  const navigate = useNavigate();

  // Filter jobs based on user preferences
  const filteredJobs = jobs.filter((job) =>
    (!qualification || job.qualification === qualification) &&
    (!fieldOfInterest || job.field === fieldOfInterest) &&
    (!yearsOfExperience || job.experienceRequired <= Number(yearsOfExperience)) &&
    (!skills || job.skillsRequired.some(skill =>
      skills.split(",").map((s) => s.trim().toLowerCase()).includes(skill.toLowerCase())
    ))
  );

  const handleApplyClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <div className="jobs-page-container">
      <h1 className="jobs-title">Available Jobs</h1>
      <div className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div className="logo-and-title">
                  <img
                    src={job.logoUrl || "/default-logo.png"} 
                    alt={`${job.company} Logo`}
                    className="company-logo"
                  />
                </div>
                  <h3 className="job-title">{job.title}</h3>
                <span className="job-location">{job.location}</span>
              </div>
              <div className="job-body">
                <p>
                  <strong>Company:</strong> {job.company}
                </p>
                <p>
                  <strong>Field:</strong> {job.field}
                </p>
                <p>
                  <strong>Qualification:</strong> {job.qualification}
                </p>
                <p>
                  <strong>Experience Required:</strong> {job.experienceRequired} years
                </p>
                <p>
                  <strong>Skills:</strong> {job.skillsRequired.join(", ")}
                </p>
                <p>
                  <strong>Salary:</strong> {job.salaryRange}
                </p>
              </div>
              <div className="job-footer">
                <button
                  className="apply-btn"
                  onClick={() => handleApplyClick(job.id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-jobs-message">
            No jobs match your preferences. Try adjusting the filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default JobsPage;
