import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Students from './components/Students';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Attendance from './components/Attendance';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Logout from './components/Logout';
import axiosServices from './components/axiosServices';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.yourbackend.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
