import React, { useEffect, useState } from 'react';
import './Students.css';
import { FaUserGraduate } from 'react-icons/fa';
import { getData, postData, putData, deleteData } from './axiosServices';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [updatedStudent, setUpdatedStudent] = useState({ id: '', name: '', email: '' });

  // Fetch student data on component mount
  useEffect(() => {
    getData("/users")
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
        setLoading(false);
      });
  }, []);

  // Handle viewing student details
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  // Add a new student
  const handleAddStudent = async () => {
    try {
      const addedStudent = await postData("/users", newStudent);
      setStudents([...students, addedStudent]);
      setNewStudent({ name: '', email: '' });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  // Prepare to update an existing student
  const handlePrepareUpdate = (student) => {
    setUpdatedStudent({ id: student.id, name: student.name, email: student.email });
  };

  // Update an existing student
  const handleUpdateStudent = async () => {
    try {
      const updatedStudentData = await putData(`/users/${updatedStudent.id}`, updatedStudent);
      setStudents(students.map((student) => 
        student.id === updatedStudent.id ? updatedStudentData : student
      ));
      setUpdatedStudent({ id: '', name: '', email: '' }); // Reset after update
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Delete a student
  const handleDeleteStudent = async (studentId) => {
    try {
      await deleteData(`/users/${studentId}`);
      setStudents(students.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="students-container">
      <h1><FaUserGraduate /> Students</h1>
      <p>Manage student information, view profiles, and track performance.</p>

      {/* Add Student Form */}
      <div>
        <h2>Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Update Student Form */}
      {updatedStudent.id && (
        <div>
          <h2>Update Student</h2>
          <input
            type="text"
            placeholder="Name"
            value={updatedStudent.name}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={updatedStudent.email}
            onChange={(e) => setUpdatedStudent({ ...updatedStudent, email: e.target.value })}
          />
          <button onClick={handleUpdateStudent}>Update Student</button>
          <button onClick={() => setUpdatedStudent({ id: '', name: '', email: '' })}>Cancel</button>
        </div>
      )}

      {/* Student table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handlePrepareUpdate(student)}>Update</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                <button onClick={() => handleViewDetails(student)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal to display student details */}
      {selectedStudent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedStudent(null)}>&times;</span>
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
