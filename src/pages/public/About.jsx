import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './PublicPages.css';

const About = () => {
  return (
    <div className="public-page">
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>ABOUT US</h1>
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <i className="fas fa-chevron-right"></i>
            <span>ABOUT US</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="content-section">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-image-col">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" 
                alt="About ECA" 
                className="about-main-image"
              />
            </div>
            <div className="about-text-col">
              <div className="section-subtitle">
                <i className="fas fa-spray-can"></i>
                <span>ABOUT US</span>
              </div>
              <h2>About Executive Cleaning Assistance</h2>
              <p>
                Welcome to Executive Cleaning Assistance, where cleanliness meets professionalism in perfect
                harmony. We are your partners in creating pristine environments that reflect the highest
                standards of excellence. At Executive Cleaning Assistance, we understand that a clean and
                organized space is not just a luxury but an essential foundation for success.
              </p>
              <p>
                <strong>Our Journey:</strong> From our inception, Executive Cleaning Assistance has been driven by a singular
                goal: to redefine the cleaning industry by merging unparalleled cleaning expertise with a
                customer-centric approach. Founded by a team of cleaning enthusiasts with extensive industry
                experience, our company emerged as a response to the demand for superior cleaning services
                delivered with precision, reliability, and a touch of sophistication.
              </p>
              
              <h4 className="mt-4">Our Philosophy:</h4>
              <div className="philosophy-list">
                <div className="philosophy-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Excellence:</strong> We are dedicated to upholding the highest standards of cleaning. 
                    Our team comprises meticulous professionals who take pride in their work.
                  </div>
                </div>
                <div className="philosophy-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Professionalism:</strong> Our services are tailored to meet the unique needs of businesses, 
                    offices, and high-end establishments.
                  </div>
                </div>
                <div className="philosophy-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Convenience:</strong> We recognize the demands of your busy schedule. That's why we provide 
                    flexible scheduling options and a seamless booking process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Executive Cleaning Assistance</h2>
          <div className="features-grid">
            <div className="feature-box feature-blue">
              <div className="feature-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h4>Trained Experts</h4>
              <p>Our team is composed of highly trained cleaning professionals who are skilled in their craft.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Tailored Solutions</h4>
              <p>Our personalized approach ensures that our cleaning solutions align perfectly with your preferences.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h4>Cutting-Edge Technology</h4>
              <p>We stay ahead by utilizing the latest cleaning techniques and tools for a superior experience.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h4>Confidentiality</h4>
              <p>We respect your privacy and ensure that your sensitive information remains secure.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <h4>Satisfaction Guaranteed</h4>
              <p>Your satisfaction is our ultimate reward. We go the extra mile to exceed your expectations.</p>
            </div>
            <div className="feature-box feature-highlight">
              <p className="highlight-text">
                Experience the executive difference with Executive Cleaning Assistance. Elevate your space 
                to reflect your values of professionalism and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="works-section">
        <div className="container">
          <div className="section-subtitle light text-center">
            <i className="fas fa-spray-can"></i>
            <span>WORKING PROCESS</span>
          </div>
          <h2 className="text-center text-white">Easy Steps To Work</h2>
          <div className="works-grid">
            <div className="work-item">
              <div className="work-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Find Us Online</h4>
              <p>Book through our website or app and access premium services in just a few clicks.</p>
            </div>
            <div className="work-item">
              <div className="work-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h4>Choose Services</h4>
              <p>Select cleaning type and tailor the booking to your specific needs.</p>
            </div>
            <div className="work-item">
              <div className="work-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h4>Book Appointment</h4>
              <p>Confirm your schedule and let our trusted professionals handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="section-subtitle light text-center">
            <i className="fas fa-spray-can"></i>
            <span>OUR ACHIEVEMENT</span>
          </div>
          <h2 className="text-center text-white mb-4">Premium Cleaning Solutions<br />100% Spotless Results</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon-box"><i className="fas fa-building"></i></div>
              <h3>8k</h3>
              <p>Services Provided</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box"><i className="fas fa-clipboard-list"></i></div>
              <h3 className="outline">12k</h3>
              <p>Orders Served</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box"><i className="fas fa-users"></i></div>
              <h3>300+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box"><i className="fas fa-star"></i></div>
              <h3 className="outline">7k</h3>
              <p>5 Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
