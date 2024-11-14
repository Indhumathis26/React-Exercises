// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data (if any)
    localStorage.removeItem('user'); // Example for localStorage
    // Redirect to the home page
    navigate('/');
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Logout;
