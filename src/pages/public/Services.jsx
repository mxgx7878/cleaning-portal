import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { mockServices } from '../../data/mockData';
import './PublicPages.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="public-page">
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>OUR SERVICES</h1>
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <i className="fas fa-chevron-right"></i>
            <span>OUR SERVICES</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="content-section">
        <div className="container">
          <div className="section-subtitle">
            <i className="fas fa-spray-can"></i>
            <span>OUR SERVICES</span>
          </div>
          <h2>Everything You Need for Your Space</h2>
          <p className="section-intro">
            From regular home cleaning to specialized commercial services, we deliver spotless results 
            tailored to your needs across Brisbane, Gold Coast and surrounding suburbs.
          </p>

          <div className="services-full-grid">
            {mockServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card-full"
                onClick={() => setSelectedService(service)}
              >
                <div className="service-card-badges">
                  {service.popular && (
                    <span className="badge-popular">
                      <i className="fas fa-star"></i> Popular
                    </span>
                  )}
                  <button className="arrow-btn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-meta">
                  <span className="duration">
                    <i className="fas fa-clock"></i> {service.duration}
                  </span>
                  <span className="price">From ${service.basePrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What's Included in Our Services</h2>
          <div className="included-grid">
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>Professional Staff</h4>
              <p>Vetted, trained and insured cleaning professionals</p>
            </div>
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>Quality Products</h4>
              <p>Eco-friendly and effective cleaning supplies included</p>
            </div>
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>All Equipment</h4>
              <p>We bring all necessary tools and equipment</p>
            </div>
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>Insurance Coverage</h4>
              <p>Fully insured for your peace of mind</p>
            </div>
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>Satisfaction Guarantee</h4>
              <p>Not happy? We'll re-clean at no extra cost</p>
            </div>
            <div className="included-card">
              <i className="fas fa-check-circle"></i>
              <h4>Flexible Scheduling</h4>
              <p>Book at times that work for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Experience the Difference?</h2>
          <p>Book your cleaning service today and enjoy a spotless space</p>
          <div className="cta-buttons">
            <Link to="/booking" className="btn-primary">Book Now</Link>
            <Link to="/contact" className="btn-secondary-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-icon">{selectedService.icon}</div>
            <h2>{selectedService.name}</h2>
            <p className="modal-description">{selectedService.description}</p>
            
            <div className="modal-details">
              <div className="detail-item">
                <strong>Duration</strong>
                <span>{selectedService.duration}</span>
              </div>
              <div className="detail-item">
                <strong>Starting From</strong>
                <span className="price">${selectedService.basePrice}</span>
              </div>
            </div>

            {selectedService.inclusions && (
              <div className="modal-list">
                <h4>What's Included:</h4>
                <ul>
                  {selectedService.inclusions.map((item, idx) => (
                    <li key={idx}><i className="fas fa-check"></i> {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedService.exclusions && (
              <div className="modal-list exclusions">
                <h4>Not Included:</h4>
                <ul>
                  {selectedService.exclusions.map((item, idx) => (
                    <li key={idx}><i className="fas fa-times"></i> {item}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link to="/booking" className="btn-primary btn-block">
              Book This Service
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
