import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { mockPricingPlans, mockServices, formatCurrency } from '../../data/mockData';
import './PublicPages.css';

const Pricing = () => {
  return (
    <div className="public-page">
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>PRICING</h1>
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <i className="fas fa-chevron-right"></i>
            <span>PRICING</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="content-section">
        <div className="container">
          <div className="section-subtitle text-center">
            <i className="fas fa-spray-can"></i>
            <span>PRICING</span>
          </div>
          <h2 className="text-center">Transparent & Flexible Pricing</h2>
          <p className="section-intro text-center">
            No hidden fees, no surprises. Choose the plan that works best for you.
          </p>

          <div className="pricing-grid">
            {mockPricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price-display">
                  <span className="price-amount">{formatCurrency(plan.pricePerHour)}</span>
                  <span className="price-period">/Hour</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`pricing-btn ${plan.featured ? 'featured' : ''}`}>
                  BOOK NOW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Prices */}
      <section className="content-section bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Service Price Guide</h2>
          <p className="section-intro text-center">
            Starting prices for our most popular services. Final price depends on property size and requirements.
          </p>
          
          <div className="price-table">
            <div className="price-table-header">
              <span>Service</span>
              <span>Duration</span>
              <span>Starting From</span>
            </div>
            {mockServices.map((service) => (
              <div key={service.id} className="price-table-row">
                <span className="service-name">
                  <span className="service-icon">{service.icon}</span>
                  {service.name}
                </span>
                <span className="duration">{service.duration}</span>
                <span className="price">{formatCurrency(service.basePrice)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the price?</h4>
              <p>All prices include professional cleaning staff, eco-friendly products, and all necessary equipment. No hidden fees.</p>
            </div>
            <div className="faq-item">
              <h4>Do you charge extra for weekends?</h4>
              <p>Our standard rates apply Monday to Saturday. Sunday bookings may have a small surcharge depending on availability.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a cancellation fee?</h4>
              <p>Free cancellation up to 24 hours before your scheduled service. Cancellations within 24 hours may incur a fee.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer discounts for recurring bookings?</h4>
              <p>Yes! Weekly bookings receive 15% off, fortnightly 10% off, and monthly 5% off our standard rates.</p>
            </div>
            <div className="faq-item">
              <h4>How do I get an accurate quote?</h4>
              <p>Use our online booking form to get an instant estimate based on your property details and requirements.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, bank transfer, and PayPal. Payment is due after service completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Get Your Free Quote Today</h2>
          <p>No obligation, instant estimate for your cleaning needs</p>
          <Link to="/booking" className="btn-primary">Get a Quote</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
