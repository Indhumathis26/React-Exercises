import React, { useState } from 'react';
import './Auth.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      localStorage.setItem('loggedInUser', JSON.stringify(registeredUser));
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleForgotPasswordRedirect = () => {
    navigate('/forgot-password'); // Redirect to forgot password page
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login to Your Account</h2><br></br>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        
        {/* Social Login Options */}
        <div className="social-login">
          <p>Or continue with:</p>
          <div className="social-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
            <button className="social-btn twitter">Twitter</button>
          </div>
        </div>

        
        <p className="forgot-password" onClick={handleForgotPasswordRedirect}>
          Forgot Password?
        </p>
        <p className="redirect-text">
          Don't have an account?{' '}
          <span onClick={handleRegisterRedirect} className="register-link">Register here</span>
        </p>
        
      </div>
    </div>
  );
};

export default Login;
