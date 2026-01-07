import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './PublicPages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="public-page">
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>CONTACT US</h1>
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <i className="fas fa-chevron-right"></i>
            <span>CONTACT US</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left - Info */}
            <div className="contact-info-col">
              <h2>Get in Touch with Us</h2>
              <p>
                Have a question or need a custom cleaning solution? We're here to help! 
                Our friendly team will get back to you promptly.
              </p>

              <div className="contact-info-boxes">
                <div className="info-box">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Servicing Areas</h4>
                    <p>Brisbane, Gold Coast and surrounding suburbs</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>admin@executivecleaningassistance.com</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>0488 352 478</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h4>Working Hours</h4>
                    <p>Mon-Fri: 8:00am - 5:00pm<br />Saturday: 9:00am - 3:00pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-follow">
                <p>Follow us:</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper">
                <h3>Request a Free Quote</h3>
                <p>Fill out the form below and we'll get back to you with a free, no-obligation quote.</p>

                {submitted && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Thank you! We'll be in touch shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        required
                      >
                        <option value="">Choose a Service</option>
                        <option value="regular">Regular Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="end-of-lease">End of Lease</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary btn-block">
                    SUBMIT NOW <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.2076836679436!2d153.0234489!3d-27.4674803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1d4c3e4f0b%3A0x502a35af3de8620!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="ECA Location"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
