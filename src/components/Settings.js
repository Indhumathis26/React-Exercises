import React, { useState } from 'react';
import './Settings.css';
import { FaCog } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    password: '',
    confirmPassword: '',
    profilePicture: '',
    language: 'en', // Default language
    twoStepVerification: false, // Default for two-step verification
  });

  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });

    if (type === 'file') {
      setPreview(URL.createObjectURL(files[0]));
    }
  };

  const handleSave = () => {
    if (settings.password !== settings.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Settings saved successfully!');
    // Typically, you would send the settings to your server here
  };

  const handleReset = () => {
    setSettings({
      notifications: true,
      theme: 'light',
      password: '',
      confirmPassword: '',
      profilePicture: '',
      language: 'en',
      twoStepVerification: false,
    });
    setPreview('');
  };

  const themeClass = settings.theme === 'dark' ? 'dark-theme' : '';

  return (
    <div className={`settings-container ${themeClass}`}>
      <h1 className="settings-header">
        <FaCog className="settings-icon" /> Settings
      </h1>

      <div className="settings-section">
        <h2>Account Settings</h2>

        <div className="setting">
          <label htmlFor="notifications" className="checkbox-label">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="checkbox-input"
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting">
          <label htmlFor="theme">Select Theme:</label>
          <select
            name="theme"
            id="theme"
            value={settings.theme}
            onChange={handleChange}
            className="select-input"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="setting">
          <label htmlFor="language">Select Language:</label>
          <select
            name="language"
            id="language"
            value={settings.language}
            onChange={handleChange}
            className="select-input"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <div className="setting">
          <label htmlFor="twoStepVerification" className="checkbox-label">
            <input
              type="checkbox"
              id="twoStepVerification"
              name="twoStepVerification"
              checked={settings.twoStepVerification}
              onChange={handleChange}
              className="checkbox-input"
            />
            Enable Two-Step Verification
          </label>
        </div>

        <h2>Profile Picture</h2>
        <div className="setting">
          <label htmlFor="profilePicture">Upload Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
            className="file-input"
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Profile Preview" />
            </div>
          )}
        </div>

        <h2>Change Password</h2>
        <div className="setting">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="setting">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={settings.confirmPassword}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="button-group">
          <button className="save-btn" onClick={handleSave}>
            Save Settings
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
