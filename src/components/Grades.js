import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaChartLine, FaHistory, FaTrophy, FaFileDownload, FaFilter, FaBookOpen, FaInfoCircle, FaBalanceScale } from 'react-icons/fa';
import './Grades.css';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grades = () => {
  const [filterType, setFilterType] = useState('');
  const [filterData, setFilterData] = useState('');
  const [showGPA, setShowGPA] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Sample data for the grade distribution across multiple subjects
  const data = {
    labels: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Economics'],
    datasets: [
      {
        label: 'A Grade',
        data: [15, 10, 8, 12, 11, 14, 13],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'B Grade',
        data: [12, 15, 9, 11, 14, 10, 8],
        backgroundColor: '#2196F3',
      },
      {
        label: 'C Grade',
        data: [8, 12, 10, 9, 7, 8, 6],
        backgroundColor: '#FFC107',
      },
      {
        label: 'D Grade',
        data: [3, 5, 6, 4, 5, 3, 4],
        backgroundColor: '#FF5722',
      },
      {
        label: 'F Grade',
        data: [2, 1, 3, 2, 1, 1, 2],
        backgroundColor: '#F44336',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grade Distribution by Subject',
        font: {
          size: 18,
        },
        color: '#333',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Students',
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Subjects',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Sample data for filtering
  const subjectGrades = {
    'Computer Science': { A: 15, B: 12, C: 8, D: 3, F: 2 },
    'Mathematics': { A: 10, B: 15, C: 12, D: 5, F: 1 },
    'Physics': { A: 8, B: 9, C: 10, D: 6, F: 3 },
    'Chemistry': { A: 12, B: 11, C: 9, D: 4, F: 2 },
    'Biology': { A: 11, B: 14, C: 7, D: 5, F: 1 },
    'History': { A: 14, B: 10, C: 8, D: 3, F: 1 },
    'Economics': { A: 13, B: 8, C: 6, D: 4, F: 2 },
  };

  const semesterGrades = {
    'Fall 2023': { GPA: 3.7, totalStudents: 200, topGrade: 'A' },
    'Spring 2023': { GPA: 3.8, totalStudents: 180, topGrade: 'A-' },
    'Fall 2022': { GPA: 3.6, totalStudents: 210, topGrade: 'A' },
  };

  const gradeRange = {
    'A Grade': { description: 'Highest performing students (A to A+)', percentage: 20 },
    'B Grade': { description: 'Above-average students (B to B+)', percentage: 30 },
    'C Grade': { description: 'Average students (C to C+)', percentage: 25 },
    'D Grade': { description: 'Below-average students (D to D+)', percentage: 15 },
    'F Grade': { description: 'Failing students (F)', percentage: 10 },
  };

  const handleFilterClick = (type) => {
    setFilterType(type);
    let details;

    switch (type) {
      case 'subject':
        details = (
          <div>
            <h4>Subject Grades:</h4>
            {Object.entries(subjectGrades).map(([subject, grades]) => (
              <div key={subject}>
                <h5>{subject}</h5>
                <ul>
                  {Object.entries(grades).map(([grade, count]) => (
                    <li key={grade}>{grade}: {count} students</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;
      case 'semester':
        details = (
          <div>
            <h4>Semester Grades:</h4>
            {Object.entries(semesterGrades).map(([semester, grades]) => (
              <div key={semester}>
                <h5>{semester}</h5>
                <p>GPA: {grades.GPA}</p>
                <p>Total Students: {grades.totalStudents}</p>
                <p>Top Grade: {grades.topGrade}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'grade':
        details = (
          <div>
            <h4>Grade Ranges:</h4>
            {Object.entries(gradeRange).map(([grade, details]) => (
              <div key={grade}>
                <h5>{grade}</h5>
                <p>{details.description}</p>
                <p>Percentage of Students: {details.percentage}%</p>
              </div>
            ))}
          </div>
        );
        break;
      default:
        details = '';
    }

    setFilterData(details);
  };

  const handleShowGPA = () => {
    setShowGPA(!showGPA);
  };

  const handleShowBreakdown = (subject) => {
    setSelectedSubject(subject);
    setShowBreakdown(true);
  };

  const handleCloseBreakdown = () => {
    setShowBreakdown(false);
    setSelectedSubject(null);
  };
  // Function to generate the report data
const generateReportData = () => {
  let reportContent = 'Grade Report\n\n';
  reportContent += 'Subject Grades:\n';
  Object.entries(subjectGrades).forEach(([subject, grades]) => {
    reportContent += `${subject}:\n`;
    Object.entries(grades).forEach(([grade, count]) => {
      reportContent += `${grade}: ${count} students\n`;
    });
    reportContent += '\n';
  });
  reportContent += 'Semester Grades:\n';
  Object.entries(semesterGrades).forEach(([semester, grades]) => {
    reportContent += `${semester} - GPA: ${grades.GPA}, Total Students: ${grades.totalStudents}, Top Grade: ${grades.topGrade}\n`;
  });

  return reportContent;
};

// Function to download the grade report
const downloadReport = () => {
  const reportData = generateReportData();
  const blob = new Blob([reportData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'grade_report.txt';
  a.click();
  URL.revokeObjectURL(url); // Clean up the URL object
};


  return (
    <div className="grades-container">
      <h1 className="title"><FaChartLine /> Grades</h1>
      <p className="description">Track your academic performance and view your grades for each subject.</p>

      {/* Filters */}
      <div className="grades-filters">
        <h2>Filter Grades</h2><br></br>
        <div className="filter-buttons">
          <button className="filter-btn" onClick={() => handleFilterClick('subject')}><FaFilter /> Filter by Subject</button>
          <button className="filter-btn" onClick={() => handleFilterClick('semester')}><FaFilter /> Filter by Semester</button>
          <button className="filter-btn" onClick={() => handleFilterClick('grade')}><FaFilter /> Filter by Grade</button>
        </div>
      </div>

      {/* Display selected filter details */}
      {filterData && (
        <div className="filter-details">
          <h3>Filter Results:</h3>
          <div>{filterData}</div>
        </div>
      )}

      {/* Grade Distribution Chart */}
      <div className="grades-graph">
        <h2>Grade Distribution</h2>
        <div className="chart-wrapper">
          <Bar data={data} options={options} />
        </div>
      </div>

      {/* GPA Calculation */}
      <div className="gpa-section">
        <h2><FaBalanceScale /> Cumulative GPA</h2><br></br>
        <button className="gpa-btn" onClick={handleShowGPA}>Calculate GPA</button>
        {showGPA && <p className="gpa-result">Your Cumulative GPA is: <strong>3.8</strong></p>}
      </div>

      {/* Grade Breakdown by Subject */}
      <div className="subject-breakdown">
        <h2><FaInfoCircle /> Grade Breakdown by Subject</h2><br></br>
        <div className="breakdown-buttons">
          {Object.keys(subjectGrades).map((subject) => (
            <button key={subject} className="breakdown-btn" onClick={() => handleShowBreakdown(subject)}>
              View Breakdown for {subject}
            </button>
          ))}
        </div>
        {showBreakdown && selectedSubject && (
          <div className="modal">
            <div className="modal-content">
              <h2>Grade Breakdown for {selectedSubject}</h2>
              <p>Example breakdown of grades for {selectedSubject}.</p>
              <button className="close-btn" onClick={handleCloseBreakdown}>Close</button>
            </div>
          </div>
        )}
      </div>

      {/* Grade History */}
      <div className="grade-history">
        <h2><FaHistory /> Grade History</h2>
        <p>View your grades from previous semesters and track your progress.</p>
        {/* Download Report Button */}
      <button className="download-report-btn" onClick={downloadReport}>
        <FaFileDownload /> Download Grade Report
      </button>

      </div>

      {/* Achievements */}
      <div className="achievements">
        <h2><FaTrophy /> Achievements</h2>
        <p>View academic achievements such as honors and awards.</p>
      </div>

      {/* Performance Analysis */}
      <div className="performance-analysis">
        <h2><FaBookOpen /> Performance Analysis</h2>
        <p>Analyze your performance trends and identify areas of improvement.</p>
      </div>
    </div>
  );
};

export default Grades;
