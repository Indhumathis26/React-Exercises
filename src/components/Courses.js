import React, { useState } from 'react';
import './Courses.css';
import { FaBook, FaLaptopCode, FaCalculator, FaFlask, FaMusic, FaPalette, FaMicroscope, FaPenFancy, FaMoneyBillWave, FaGlobe, FaBrain, FaBuilding, FaGavel, FaCogs, FaLeaf, FaFilm, FaChalkboardTeacher, FaRobot } from 'react-icons/fa';

const Courses = () => {
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const coursesData = [
    {
      id: 1,
      title: "Computer Science",
      description: "Introduction to algorithms, data structures, and programming.",
      icon: <FaLaptopCode style={{ color: '#4285F4' }} />,
    },
    {
      id: 2,
      title: "Mathematics",
      description: "Advanced calculus, linear algebra, and statistics.",
      icon: <FaCalculator style={{ color: '#34A853' }} />,
    },
    {
      id: 3,
      title: "Physics",
      description: "Fundamentals of mechanics, thermodynamics, and electromagnetism.",
      icon: <FaFlask style={{ color: '#FF6F61' }} />,
    },
    {
      id: 4,
      title: "History",
      description: "Exploring key historical events and their impact on the present.",
      icon: <FaBook style={{ color: '#F4B400' }} />,
    },
    {
      id: 5,
      title: "Engineering",
      description: "Principles of designing and building machines, structures, and systems.",
      icon: <FaCogs style={{ color: '#9B59B6' }} />, // Purple
    },
    {
      id: 6,
      title: "Biology",
      description: "Study of living organisms, their structure, function, and evolution.",
      icon: <FaMicroscope style={{ color: '#34A853' }} />, // Green
    },
    {
      id: 7,
      title: "Chemistry",
      description: "Chemical reactions, organic compounds, and the periodic table.",
      icon: <FaFlask style={{ color: '#F44B42' }} />, // Bright Red
    },
    {
      id: 8,
      title: "Art",
      description: "Study of visual arts, including painting, sculpture, and design.",
      icon: <FaPalette style={{ color: '#F7A1C4' }} />, // Pink
    },
    {
      id: 9,
      title: "Literature",
      description: "Exploration of classic and modern literary works and techniques.",
      icon: <FaPenFancy style={{ color: '#8E44AD' }} />, // Purple
    },
    {
      id: 10,
      title: "Economics",
      description: "Understanding economic principles, markets, and global trade.",
      icon: <FaMoneyBillWave style={{ color: '#F39C12' }} />, // Orange
    },
    {
      id: 11,
      title: "Philosophy",
      description: "Study of fundamental nature of knowledge, reality, and existence.",
      icon: <FaBook style={{ color: '#2C3E50' }} />, // Navy Blue
    },
    {
      id: 12,
      title: "Environmental Science",
      description: "Study of ecosystems, conservation, and environmental protection.",
      icon: <FaGlobe style={{ color: '#4CAF50' }} />, // Light Green
    },
    {
      id: 13,
      title: "Psychology",
      description: "Study of the human mind, behavior, and cognitive functions.",
      icon: <FaBrain style={{ color: '#E67E22' }} />, // Dark Orange
    },
    {
      id: 14,
      title: "Business Management",
      description: "Principles of managing businesses, including finance and operations.",
      icon: <FaBuilding style={{ color: '#3498DB' }} />, // Light Blue
    },
    {
      id: 15,
      title: "Sociology",
      description: "Study of society, social relationships, and social behavior.",
      icon: <FaBook style={{ color: '#16A085' }} />, // Teal
    },
    {
      id: 16,
      title: "Political Science",
      description: "Study of political systems, governance, and public policies.",
      icon: <FaGavel style={{ color: '#C0392B' }} />, // Dark Red
    },
    {
      id: 17,
      title: "Music Theory",
      description: "Understanding musical structure, composition, and performance.",
      icon: <FaMusic style={{ color: '#DB4437' }} />,
    },
    {
      id: 18,
      title: "Botany",
      description: "Study of plant life, photosynthesis, and plant ecosystems.",
      icon: <FaLeaf style={{ color: '#66BB6A' }} />, // Light Green
    },
    {
      id: 19,
      title: "Film Studies",
      description: "Analyzing movies, filmmaking techniques, and cinematic history.",
      icon: <FaFilm style={{ color: '#E74C3C' }} />, // Red
    },
    {
      id: 20,
      title: "Education",
      description: "Principles of teaching, curriculum design, and classroom management.",
      icon: <FaChalkboardTeacher style={{ color: '#3498DB' }} />, // Blue
    },
  ];

  const handleEnroll = (course) => {
    setEnrolledCourse(course);
  };

  const closeEnroll = () => {
    setEnrolledCourse(null);
  };

  return (
    <div className="courses-container">
      <h1><FaBook /> Courses</h1>
      <p>View all available courses, enroll in new ones, and track your progress.</p>

      {/* Courses list */}
      <div className="courses-list">
        {coursesData.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">{course.icon}</div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className="enroll-btn" onClick={() => handleEnroll(course)}>Enroll</button>
          </div>
        ))}
      </div>

      {/* Enrolling modal */}
      {enrolledCourse && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enrollment Details</h2>
            <p><strong>Course:</strong> {enrolledCourse.title}</p>
            <p><strong>Description:</strong> {enrolledCourse.description}</p>
            <button className="confirm-enroll-btn" onClick={() => alert(`You are enrolled in ${enrolledCourse.title}!`)}>Confirm Enrollment</button>
            <button className="cancel-enroll-btn" onClick={closeEnroll}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
