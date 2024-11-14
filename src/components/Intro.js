import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css'; // Assuming enhanced styling is in place

const Intro = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">Welcome to the Student Information Management System</h1>
        <p className="intro-description">
          Manage your students, courses, grades, and more efficiently with our easy-to-use platform.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
      </div>

      </div>
  );
};

export default Intro;
