import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const newUser = { email, password };
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Register a New Account</h2><br></br>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="redirect-text">
          Already have an account?{' '}
          <span onClick={handleLoginRedirect} className="login-link">Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
