import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="top-header-content">
            <div className="contact-info">
              <span><i className="fas fa-phone"></i> 0488 352 478</span>
              <span className="hide-mobile"><i className="fas fa-envelope"></i> admin@executivecleaningassistance.com</span>
            </div>
            <div className="auth-buttons">
              <Link to="/login" className="auth-link">LOGIN</Link>
              <Link to="/register" className="btn btn-sm btn-light">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="ECA" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} />
              <div className="logo-text" style={{ display: 'flex' }}>
                <span className="logo-icon">✨</span>
                <div className="logo-words">
                  <span className="logo-main">ECA</span>
                  <span className="logo-sub">Executive Cleaning</span>
                </div>
              </div>
            </Link>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>

            <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="header-actions hide-mobile">
              <Link to="/booking" className="btn btn-primary">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
