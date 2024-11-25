import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobDetailsPage.css";
import { jobs } from "../Data/DataJobs";

function JobDetailsPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [coverLetter, setCoverLetter] = useState("");

  const job = jobs.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return <p>Job not found!</p>;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    navigate("/"); // Navigate back to home after submission
  };

  return (
    <div className="job-details-container">
      <div className="job-details-wrapper">
        {/* Left Half - Job Info */}
        <div className="job-info">
          <h1>{job.title}</h1>
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Salary:</strong> {job.salaryRange}
          </p>
          <p>
            <strong>Experience Required:</strong> {job.experienceRequired} years
          </p>
          <p>
            <strong>Skills Required:</strong> {job.skillsRequired.join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {job.description}
          </p>
          <div className="requirements">
            <h3>Requirements:</h3>
            <ul>
              {job.skillsRequired.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Half - Application Form */}
        <div className="application-form-wrapper">
          <h2>Apply for this Job</h2>
          <form onSubmit={handleFormSubmit} className="application-form">
            <div className="name-fields">
              <label>
                First Name:
                <input type="text" name="firstName" required />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" required />
              </label>
            </div>

            <div className="name-fields">
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phone" required />
              </label>
            </div>

            <label>
              LinkedIn Profile (Optional):
              <input type="url" name="linkedin" />
            </label>

            {/* Resume Field */}
            <label>
              Resume (CV):
              <input type="file" name="resume" required />
            </label>

            {/* Cover Letter Field */}
            <label>
              Cover Letter:
              <textarea
                name="coverLetter"
                placeholder="Type your cover letter here..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows="6"
              />
            </label>

            <h5 className="OR">OR</h5>

            {/* Optional Cover Letter Attachment */}
            <div className="attachments">
              <label>
                Attach Cover Letter (Optional):
                <input type="file" name="coverLetterAttachment" />
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Back to Home Button */}
      <button onClick={() => navigate("/")} className="back-btn">
        Back to Home
      </button>
    </div>
  );
}

export default JobDetailsPage;
