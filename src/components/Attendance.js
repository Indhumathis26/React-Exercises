import React, { useState } from 'react';
import './Attendance.css';
import { FaCalendarCheck, FaDownload, FaFilter, FaSort, FaChartBar, FaEye } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2'; // Ensure you have react-chartjs-2 and chart.js installed

const Attendance = () => {
  const [courseFilter, setCourseFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const studentAttendanceData = [
    { studentId: '1', name: 'John Doe', course: 'Mathematics', date: '2024-10-05', status: 'Present' },
    { studentId: '1', name: 'John Doe', course: 'Mathematics', date: '2024-10-06', status: 'Absent' },
    { studentId: '2', name: 'Jane Smith', course: 'Biology', date: '2024-10-07', status: 'Present' },
    { studentId: '2', name: 'Jane Smith', course: 'Biology', date: '2024-10-08', status: 'Present' },
    { studentId: '1', name: 'John Doe', course: 'Physics', date: '2024-10-09', status: 'Absent' },
    { studentId: '1', name: 'John Doe', course: 'Chemistry', date: '2024-10-10', status: 'Present' },
    { studentId: '2', name: 'Jane Smith', course: 'Chemistry', date: '2024-10-11', status: 'Absent' },
  ];

  const attendanceData = [
    { date: '2024-10-05', course: 'Mathematics', status: 'Present' },
    { date: '2024-10-06', course: 'Computer Science', status: 'Absent' },
    { date: '2024-10-07', course: 'Biology', status: 'Present' },
    { date: '2024-10-08', course: 'Chemistry', status: 'Present' },
    { date: '2024-10-09', course: 'Physics', status: 'Absent' },
    { date: '2024-10-10', course: 'Mathematics', status: 'Absent' },
    { date: '2024-10-11', course: 'Computer Science', status: 'Present' },
    { date: '2024-10-12', course: 'Biology', status: 'Absent' },
    { date: '2024-10-13', course: 'Chemistry', status: 'Absent' },
    { date: '2024-10-14', course: 'Physics', status: 'Present' },
    { date: '2024-10-15', course: 'Mathematics', status: 'Present' },
    { date: '2024-10-16', course: 'History', status: 'Present' },
    { date: '2024-10-17', course: 'Geography', status: 'Absent' },
    { date: '2024-10-18', course: 'Art', status: 'Present' },
    { date: '2024-10-19', course: 'Physical Education', status: 'Present' },
    { date: '2024-10-20', course: 'Music', status: 'Absent' },
  ];

  const attendanceSummaryPerCourse = () => {
    const summary = {};
    attendanceData.forEach((entry) => {
      if (!summary[entry.course]) {
        summary[entry.course] = { present: 0, absent: 0 };
      }
      if (entry.status === 'Present') {
        summary[entry.course].present += 1;
      } else {
        summary[entry.course].absent += 1;
      }
    });
    return summary;
  };

  const summaryPerCourse = attendanceSummaryPerCourse();

  const filteredAndSortedData = Object.keys(summaryPerCourse)
    .filter((course) => course.toLowerCase().includes(courseFilter.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'course') return a.localeCompare(b);
      if (sortBy === 'present') return summaryPerCourse[b].present - summaryPerCourse[a].present;
      if (sortBy === 'absent') return summaryPerCourse[b].absent - summaryPerCourse[a].absent;
      return 0;
    });

  const exportAttendance = () => {
    const csvContent = filteredAndSortedData
      .map((course) => `${course},${summaryPerCourse[course].present},${summaryPerCourse[course].absent}`)
      .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance_summary.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const chartData = {
    labels: Object.keys(summaryPerCourse),
    datasets: [
      {
        label: 'Present',
        data: Object.values(summaryPerCourse).map((data) => data.present),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Absent',
        data: Object.values(summaryPerCourse).map((data) => data.absent),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="attendance-container">
      <h1><FaCalendarCheck /> Attendance Summary</h1>
      <p className="subtitle">Overview of student attendance across various courses.</p>

      <div className="attendance-controls">
        <div className="attendance-filters">
          <h2><FaFilter /> Filter by Course</h2>
          <input
            type="text"
            placeholder="Search Course"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
          />
        </div>

        <div className="attendance-sort">
          <h3><FaSort /> Sort By</h3>
          <div className="sort-buttons">
            <button onClick={() => setSortBy('course')}>Course Name</button>
            <button onClick={() => setSortBy('present')}>Present Count</button>
            <button onClick={() => setSortBy('absent')}>Absent Count</button>
          </div>
        </div>
      </div>

      <div className="attendance-chart">
        <h2><FaChartBar /> Attendance Overview</h2>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Present Count</th>
            <th>Absent Count</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.map((course) => (
            <tr key={course}>
              <td>{course}</td>
              <td>{summaryPerCourse[course].present}</td>
              <td>{summaryPerCourse[course].absent}</td>
              <td>
                <button className="details-btn" onClick={() => setSelectedCourse(course)}>
                  <FaEye /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="export-attendance">
        <button className="export-btn" onClick={exportAttendance}><FaDownload /> Download as CSV</button>
      </div>

      {selectedCourse && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedCourse(null)}>&times;</span>
            <h2>Attendance Details for {selectedCourse}</h2>
            <table className="details-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Student Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {studentAttendanceData
                  .filter((entry) => entry.course === selectedCourse)
                  .map((entry) => (
                    <tr key={`${entry.studentId}-${entry.date}`}>
                      <td>{entry.date}</td>
                      <td>{entry.name}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))}
                {studentAttendanceData.filter((entry) => entry.course === selectedCourse).length === 0 && (
                  <tr>
                    <td colSpan="3">No attendance records found for this course.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
