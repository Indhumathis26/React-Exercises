import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaUserGraduate, FaBook, FaChartLine, FaCalendarCheck, FaUserCircle, FaSignOutAlt, FaCog, FaBullhorn, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header with institute details */}
      <header className="home-header">
        <div className="header-content">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.RJCUiexHPkSELfP7K3vW1gAAAA&pid=Api&P=0&h=180"
            alt="Institute Logo"
            className="logo"
          />
          <div className="institute-details">
            <h1 className="institute-name">Green Valley Institute</h1>
            <p className="institute-tagline">Empowering Minds for a Brighter Tomorrow</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="home-nav">
        <ul className="nav-list">
          <li><Link to="/students"><FaUserGraduate /> Students</Link></li>
          <li><Link to="/courses"><FaBook /> Courses</Link></li>
          <li><Link to="/grades"><FaChartLine /> Grades</Link></li>
          <li><Link to="/attendance"><FaCalendarCheck /> Attendance</Link></li>
          <li><Link to="/profile"><FaUserCircle /> Profile</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
          <li><Link to="/logout"><FaSignOutAlt /> Logout</Link></li>
        </ul>
      </nav>

      {/* Dynamic Announcements Section */}
      <section className="institute-announcements">
        <FaBullhorn className="announcement-icon" />
        <h2>Latest Announcements</h2>
        <ul className="announcement-list">
          <li>🔔 Midterm exams will be held from October 15th to October 20th. Prepare accordingly!</li>
          <li>🔔 Guest lecture by Dr. Jane Smith on AI and Education, October 10th, 2 PM.</li>
          <li>🔔 Registration for Spring Semester opens next week. Don't miss the deadline!</li>
        </ul>
      </section>

      {/* Explore Our Campus Section */}
      <section className="explore-campus">
        <h2>Explore Our Campus</h2>
        <div className="campus-images">
          <img src="https://tse3.mm.bing.net/th?id=OIP.DXpmlPKlw8dz_xFyZL_8QgHaD5&pid=Api&P=0&h=180" alt="Campus View" className="campus-image" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.k-xkv7eDqMSfliwNJQlUvQHaEK&pid=Api&P=0&h=180" alt="Institute Library" className="campus-image" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.4ZGXiKJDsku2-EjmdXDGxwHaEK&pid=Api&P=0&h=180" alt="Lecture Hall" className="campus-image" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.etawmw6RqqqZ_Irpq3iMOAHaE8&pid=Api&P=0&h=180" alt="Student Hub" className="campus-image" />
          <img src="https://tse2.mm.bing.net/th?id=OIP.TxMdePuAYuwbZBOQxNvGOwHaDN&pid=Api&P=0&h=180" alt="Student Hub" className="campus-image" />
          <img src="https://tse3.mm.bing.net/th?id=OIP.1FBzXSEdnqT_W1QxaLr02QHaE8&pid=Api&P=0&h=180" alt="Student Hub" className="campus-image" />

        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul className="events-list">
          <li>📅 Open Day - October 12, 2024</li>
          <li>📅 Science Fair - October 20, 2024</li>
          <li>📅 Career Fair - November 5, 2024</li>
          <li>📅 Graduation Ceremony - December 10, 2024</li>
        </ul>
      </section>

      {/* Student Achievements Section */}
      <section className="student-achievements">
        <h2>Student Achievements</h2>
        <div className="achievement">
          <h3>John Doe Wins National Science Award</h3>
          <p>John Doe, a final-year student at Green Valley Institute, has won the National Science Award for his breakthrough research in AI technology.</p>
        </div>
        <div className="achievement">
          <h3>Sarah Lee Publishes Research in International Journal</h3>
          <p>Sarah Lee's paper on "Data Science and Its Future Impact" has been published in the renowned International Journal of Data Science.</p>
        </div>
      </section>

      {/* Institute Information Section */}
      <section className="institute-about">
        <h2>About Green Valley Institute</h2>
        <p>
          Green Valley Institute has been a leading institution in education for over 20 years. Our mission is to provide quality education to empower students for a brighter future. With state-of-the-art facilities, experienced faculty, and a commitment to excellence, we ensure that every student reaches their full potential.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial">
            <p>"Green Valley Institute transformed my career. The support from the faculty was outstanding!"</p>
            <span>- John Doe, Class of 2023</span>
          </div>
          <div className="testimonial">
            <p>"I gained practical experience in labs and workshops. The international exchange program was a life-changer!"</p>
            <span>- Sarah Lee, Class of 2022</span>
          </div>
        </div>
      </section>

      {/* Institute Highlights */}
      <section className="institute-highlights">
        <div className="highlight">
          <h3>Experienced Faculty</h3>
          <p>Our faculty is composed of industry experts and academic professionals committed to student success.</p>
        </div>
        <div className="highlight">
          <h3>Modern Facilities</h3>
          <p>From our advanced labs to our digital library, we provide students with everything they need to excel.</p>
        </div>
        <div className="highlight">
          <h3>Global Opportunities</h3>
          <p>We offer international programs and partnerships to give students a global perspective on their education.</p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </section>
    </div>
  );
};

export default Home;
