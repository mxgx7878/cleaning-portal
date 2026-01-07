import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { mockServices, mockPricingPlans, formatCurrency } from '../../data/mockData';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/banner-1.jpg',
    '/images/banner-2.jpg',
    '/images/banner-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <div className="hero-subtitle">
              <i className="fas fa-spray-can"></i>
              <span>Luxury Services At Your Door</span>
            </div>
            <h1>
              WE ARE THE BEST CLEANING<br />
              SERVICE IN <span className="highlight">AUSTRALIA</span>
            </h1>
            <p>
              Book luxury cleaning, laundry, and floral care in minutes. Professional service providers,
              seamless scheduling, and flawless results for your home or workspace.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-secondary">
                Discover More <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/booking" className="btn btn-primary">
                Book Online <i className="fas fa-calendar-alt"></i>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>3,600+</h3>
                <p>Total Customers</p>
              </div>
              <div className="hero-stat highlight-stat">
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>
              <div className="hero-stat">
                <h3>300+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card feature-blue">
              <i className="fas fa-shield-alt"></i>
              <h4>Flexible Scheduling</h4>
              <p>Book services on your terms with full control over timing and frequency for your home or workspace.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h4>Trusted Professionals</h4>
              <p>Vetted, insured, and highly trained service specialists delivering exceptional standards every time.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-leaf"></i>
              <h4>Transparent Pricing</h4>
              <p>Premium service with clear, upfront pricing and no hidden fees – quality and value, guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400" 
                alt="Cleaning Team" 
                className="about-img-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300" 
                alt="Professional Cleaner" 
                className="about-img-2"
              />
            </div>
            <div className="about-content">
              <div className="section-subtitle">
                <i className="fas fa-spray-can"></i>
                <span>ABOUT US</span>
              </div>
              <h2>Your Trusted Partner in Residential & Commercial Cleaning</h2>
              <p>
                Welcome to Executive Cleaning Assistance, where cleanliness meets professionalism in perfect
                harmony. We are your partners in creating pristine environments that reflect the highest
                standards of excellence.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>We recognize the demands of your busy schedule</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>We deliver cleaning to the highest standards</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Our services are tailored to suit every business</span>
                </div>
                <div className="about-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Custom solutions for every need</span>
                </div>
              </div>
              <div className="about-bottom">
                <Link to="/about" className="btn btn-primary">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
                <div className="experience-badge">
                  <span className="exp-number">25+</span>
                  <span className="exp-text">Years<br />Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-subtitle">
                <i className="fas fa-spray-can"></i>
                <span>OUR SERVICES</span>
              </div>
              <h2>Everything You Need for Your Space</h2>
            </div>
            <Link to="/services" className="btn btn-secondary">
              More Services <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="services-grid">
            {mockServices.slice(0, 6).map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-badge">
                  <i className="fas fa-percent"></i>
                  Discount {service.discount}%
                </div>
                <Link to="/booking" className="service-arrow">
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <img src={service.image} alt={service.name} />
                <div className="service-content">
                  <h4>{service.name}</h4>
                  <p>{service.description.substring(0, 80)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="appointment-section">
        <div className="container">
          <div className="appointment-grid">
            <div className="appointment-form-wrapper">
              <h2>Make An Appointment</h2>
              <p>Get in touch with us to schedule your cleaning service</p>
              <form className="appointment-form">
                <div className="form-row">
                  <input type="text" className="form-control" placeholder="Your Name" />
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-row">
                  <input type="tel" className="form-control" placeholder="Phone Number" />
                  <select className="form-control">
                    <option>Select Service</option>
                    {mockServices.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <textarea className="form-control" placeholder="Message" rows="4"></textarea>
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              </form>
            </div>
            <div className="appointment-image">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500" alt="Professional Cleaner" />
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="app-section">
        <div className="container">
          <div className="app-grid">
            <div className="app-image">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300" alt="Mobile App" />
            </div>
            <div className="app-content">
              <h2>Book Your Cleaning Service in Two Clicks</h2>
              <p>Download our app and manage your cleaning services on the go</p>
              <div className="app-buttons">
                <a href="#" className="app-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                </a>
                <a href="#" className="app-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="works-section">
        <div className="container">
          <div className="section-subtitle light">
            <i className="fas fa-spray-can"></i>
            <span>WORKING PROCESS</span>
          </div>
          <h2>Easy Steps To Work</h2>
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
              <p>Confirm your schedule, relax, and let our trusted professionals handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-subtitle">
            <i className="fas fa-spray-can"></i>
            <span>PRICING</span>
          </div>
          <h2>Explore Our Flexible Pricing</h2>
          <div className="pricing-grid">
            {mockPricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-tag">
                  <span className="price-amount">{formatCurrency(plan.pricePerHour)}</span>
                  <span className="price-period">/Hour</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className="btn btn-primary">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-subtitle light">
            <i className="fas fa-spray-can"></i>
            <span>OUR ACHIEVEMENT</span>
          </div>
          <h2>Premium Cleaning Solutions<br />100% Spotless Results</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon-box">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="stat-number">8k</h3>
              <p>Service Provided</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h3 className="stat-number outline">12k</h3>
              <p>Orders Served</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="stat-number">300+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon-box">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="stat-number outline">7k</h3>
              <p>5 Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div>
              <div className="section-subtitle">
                <i className="fas fa-spray-can"></i>
                <span>TESTIMONIAL</span>
              </div>
              <h2>Some Feedback From Our Customers</h2>
            </div>
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Sarah Johnson', role: 'Homeowner', img: 'https://i.pravatar.cc/60?img=1' },
              { name: 'Michael Chen', role: 'Business Owner', img: 'https://i.pravatar.cc/60?img=12' },
              { name: 'Emily Davis', role: 'Professional', img: 'https://i.pravatar.cc/60?img=5' }
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p>"Executive Cleaning Assistance exceeded my expectations. Professional, thorough, and reliable. My home has never looked better!"</p>
                <div className="testimonial-author">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
