import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Footer Top - Contact Info */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-info-grid">
            <div className="footer-info-box">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h5>Servicing Areas</h5>
                <p>Brisbane, Gold Coast and surrounding suburbs.</p>
              </div>
            </div>
            <div className="footer-info-box">
              <div className="info-icon">
                <i className="fas fa-headphones"></i>
              </div>
              <div className="info-content">
                <h5>Call Us</h5>
                <p>0488 352 478</p>
              </div>
            </div>
            <div className="footer-info-box">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h5>Email Us</h5>
                <p>admin@executivecleaning<br />assistance.com</p>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <span className="logo-icon">✨</span>
                <span className="logo-text">ECA</span>
              </div>
              <p>Welcome to Executive Cleaning Assistance, where cleanliness meets professionalism in perfect harmony.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> Our Services</Link></li>
                <li><Link to="/pricing"><i className="fas fa-chevron-right"></i> Pricing</Link></li>
                <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> Regular Cleaning</Link></li>
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> Deep Cleaning</Link></li>
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> Kitchen Cleaning</Link></li>
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> End of Lease</Link></li>
                <li><Link to="/services"><i className="fas fa-chevron-right"></i> Commercial</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Subscribe Now</h4>
              <p className="subscribe-text">Join our list for updates, offers, and premium service alerts.</p>
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © {new Date().getFullYear()} Executive Cleaning Assistance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
