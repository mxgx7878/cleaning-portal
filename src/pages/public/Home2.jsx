import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Home2.css';

const Home2 = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const cleaningTasks = [
    { icon: 'fas fa-feather-alt', name: 'Dusting' },
    { icon: 'fas fa-bed', name: 'Linen changing' },
    { icon: 'fas fa-bath', name: 'Bathroom cleaning' },
    { icon: 'fas fa-broom', name: 'Vacuuming' },
    { icon: 'fas fa-utensils', name: 'Kitchen cleaning' },
    { icon: 'fas fa-tshirt', name: 'Washing' },
    { icon: 'fas fa-water', name: 'Mopping' },
    { icon: 'fas fa-snowflake', name: 'Fridge cleaning' },
    { icon: 'fas fa-iron', name: 'Ironing' },
    { icon: 'fas fa-boxes', name: 'Tidying' },
    { icon: 'fas fa-fire', name: 'Oven cleaning' },
    { icon: 'fas fa-archive', name: 'Pantry tidying' },
    { icon: 'fas fa-spray-can', name: 'Surfaces wiped' },
    { icon: 'fas fa-bed', name: 'Bed making' },
    { icon: 'fas fa-ellipsis-h', name: 'And much more' },
  ];

  const whyChooseUs = [
    { icon: 'fas fa-award', title: 'Years of Experience', desc: 'Trusted cleaning service in Brisbane' },
    { icon: 'fas fa-headset', title: 'Local Customer Service', desc: 'Brisbane-based support team' },
    { icon: 'fas fa-medal', title: 'Satisfaction Guarantee', desc: 'We ensure your happiness' },
    { icon: 'fas fa-shield-alt', title: 'Police-Checked Cleaners', desc: 'Your safety is our priority' },
    { icon: 'fas fa-heart', title: 'Friendly & Trustworthy', desc: 'Professional and reliable staff' },
    { icon: 'fas fa-file-shield', title: 'Fully Insured', desc: 'Public Liability Insurance covered' },
  ];

  const reviews = [
    { name: 'Sarah M.', date: '15 Jan 2024', rating: 5, title: 'Excellent Service', text: 'I was thoroughly impressed with the level of service and quality. The cleaner was professional, on time, and did an amazing job. Highly recommend!' },
    { name: 'Michael T.', date: '22 Feb 2024', rating: 5, title: 'Great Experience', text: 'My experience with ECA was fantastic. They were prompt, professional, and the house looked spotless after. Will definitely book again.' },
    { name: 'Emma L.', date: '8 Mar 2024', rating: 5, title: 'Outstanding Quality', text: 'The quality of work was exceptional. They were responsive to my feedback and made sure everything was done to my satisfaction.' },
    { name: 'David K.', date: '19 Apr 2024', rating: 5, title: 'Highly Professional', text: 'The team was highly professional and attentive to my needs. They went above and beyond to ensure I was satisfied with the result.' },
    { name: 'Lisa R.', date: '5 May 2024', rating: 5, title: 'Best Clean Ever', text: 'Our regular cleaner Maria is wonderful. Her attention to detail has made our home sparkle. She is kind and trustworthy.' },
    { name: 'James W.', date: '28 May 2024', rating: 5, title: 'Reliable Service', text: 'Been using ECA for 6 months now. Consistent quality every time. The booking system is easy and the staff are friendly.' },
  ];

  const partnerLogos = [
    '/images/partners/partner1.png',
    '/images/partners/partner2.png',
    '/images/partners/partner3.png',
    '/images/partners/partner4.png',
    '/images/partners/partner5.png',
    '/images/partners/partner6.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="home2-page">
      <Navbar />

      {/* Hero Section */}
        <section className="hero2-section">
        <div className="hero2-background">
            <img src="/images/hero-bg.jpg" alt="Clean home" className="hero2-bg-image" />
            <div className="hero2-overlay"></div>
        </div>
        <div className="container">
            <div className="hero2-content">
            <h1>Local cleaners handpicked for your home</h1>
            <p>
                Professional cleaning services in Brisbane & Gold Coast with carefully screened 
                and trained cleaners. We offer regular and one-off cleans tailored to your needs.
            </p>
            
            {/* Postcode Search Box */}
            <div className="hero-search-box">
                <div className="search-input-wrapper">
                <i className="fas fa-map-marker-alt"></i>
                <input 
                    type="text" 
                    placeholder="Enter your postcode" 
                    maxLength="4"
                    className="postcode-input"
                />
                </div>
                <Link to="/booking" className="btn-search">
                Get Pricing & Book Online
                <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
            
            <div className="hero-trust-badges">
                <span><i className="fas fa-shield-alt"></i> Police Checked</span>
                <span><i className="fas fa-star"></i> 5-Star Rated</span>
                <span><i className="fas fa-check-circle"></i> Fully Insured</span>
            </div>
            </div>
        </div>
        </section>

      {/* Service Cards Section */}
      <section className="services2-section">
        <div className="container">
          <div className="services2-grid">
            {/* Regular Clean Card */}
            <div className="service2-card featured">
              <div className="service2-badge">Most Popular</div>
              <h3>Regular Clean</h3>
              <div className="service2-price">
                From <span>$45</span> p/h
                <small>*for a 3 hour service</small>
              </div>
              <p>
                Book an ongoing weekly or fortnightly clean and never worry about 
                the general chores again!
              </p>
              <ul className="service2-features">
                <li><i className="fas fa-check"></i> Cleaners Police Checked and trained</li>
                <li><i className="fas fa-check"></i> Customised cleaning to suit your needs</li>
                <li><i className="fas fa-check"></i> Covered by Public Liability Insurance</li>
              </ul>
              <div className="service2-actions">
                <Link to="/booking" className="btn-primary-full">Get Pricing and Book Online</Link>
                <Link to="/services" className="btn-link">Learn more about Regular Cleaning →</Link>
              </div>
            </div>

            {/* Once-Off Clean Card */}
            <div className="service2-card">
              <h3>Once-Off Clean</h3>
              <p>
                Our move out and spring cleans take the hard work out of a big 
                cleaning job by using our expert one-off cleaners.
              </p>
              <ul className="service2-features">
                <li><i className="fas fa-check"></i> Highly trained end of lease and spring cleaners</li>
                <li><i className="fas fa-check"></i> All cleaning equipment supplied</li>
                <li><i className="fas fa-check"></i> Full clean or partial clean options</li>
              </ul>
              <div className="service2-actions">
                <Link to="/booking" className="btn-primary-full">Get Pricing and Book Online</Link>
                <Link to="/services" className="btn-link">Learn more about Once-Off Cleaning →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-section">
        <div className="container">
          <div className="included-header">
            <h4>What can be included?</h4>
            <p>
              Any household chore, including mopping, ironing or doing the washing. 
              Each clean is fully customisable to meet your needs. Just add any special 
              requests in our simple booking process.
            </p>
            <Link to="/about" className="btn-outline-dark">How it works</Link>
          </div>
          <div className="included-grid">
            {cleaningTasks.map((task, index) => (
              <div key={index} className="included-item">
                <i className={task.icon}></i>
                <span>{task.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Testimonial Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content">
            <h2>Fresh spaces, happy faces</h2>
            <p>
              Watch real customers share their experiences with Executive Cleaning Assistance! 
              From busy professionals to families, they reveal how our trusted, police-checked 
              cleaners have transformed their homes and lifestyles.
            </p>
          </div>
          <div className="video-wrapper">
            <img src="/images/video-thumbnail.jpg" alt="Customer testimonials" />
            <button className="play-button">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Find Perfect Cleaner Section */}
      <section className="find-cleaner-section">
        <div className="container">
          <div className="find-cleaner-grid">
            <div className="find-cleaner-content">
              <h2>Wind-down and relax, find the perfect cleaner for your home</h2>
              <p>
                We take the hassle out of finding a cleaner. Executive Cleaning Assistance 
                connects you with handpicked local cleaners who can offer personalised 
                cleaning services.
              </p>
              <p>
                Whether it's a Regular or One-off clean, our team will match you with 
                the perfect fit. Cleaning your home is the heart of our business.
              </p>
            </div>
            <div className="find-cleaner-image">
              <img src="/images/relaxed-home.jpg" alt="Relaxed home environment" />
            </div>
          </div>
        </div>
      </section>

      {/* Personalised Cleaning Section */}
      <section className="personalised-section">
        <div className="container">
          <div className="personalised-grid">
            <div className="personalised-image">
              <img src="/images/cleaning-customise.jpg" alt="Customise your clean" />
            </div>
            <div className="personalised-content">
              <h2>Personalised cleaning for every home, every schedule</h2>
              <p>
                With Executive Cleaning Assistance, you're in control! Customise your clean 
                from schedule to tasks. Choose what you need, and pay only for the cleaning 
                you want. It's easy to add any special requests during booking.
              </p>
              <p>
                Our customer service team carefully selects a cleaner that fits your needs, 
                and you're in control every step of the way. Need to switch up your cleaning 
                day or frequency? No problem – do it easily through our portal or by giving us a call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-text">
            We are also providers for NDIS, aged care and disability providers.
          </p>
          <div className="partners-logos">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="partner-logo">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <h2>Why choose Executive Cleaning Assistance?</h2>
              <p>
                With years of experience as an agency for domestic cleaners, we know what 
                you need when it comes to providing help with the housework. You can choose 
                just the cleaning services you need or engage us for regular full housekeeping 
                services. ECA is here to give you back the time you need to maintain your lifestyle.
              </p>
              <Link to="/about" className="btn-primary">About Us</Link>
            </div>
            <div className="why-choose-features">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="why-feature-item">
                  <i className={item.icon}></i>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-section">
        <div className="container">
          <div className="app-grid">
            <div className="app-content">
              <span className="app-label">Download the app</span>
              <h2>Manage your clean with our simple easy to use portal</h2>
              <p>
                Streamline your cleaning schedule at the tap of a button. Our client portal 
                simplifies your bookings and makes managing your home cleaning a breeze.
              </p>
              <div className="app-buttons">
                <a href="#" className="app-store-btn">
                  <i className="fab fa-apple"></i>
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a href="#" className="app-store-btn">
                  <i className="fab fa-google-play"></i>
                  <div>
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>
            <div className="app-image">
              <img src="/images/app-mockup.png" alt="Mobile app" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews2-section">
        <div className="container">
          <div className="reviews2-header">
            <h2>What our clients are saying</h2>
            <p>
              With hundreds of 5-star reviews and new testimonials added every week, 
              our reputation as domestic cleaners in Brisbane is important to us.
            </p>
          </div>

          <div className="reviews2-carousel">
            <button className="carousel-btn prev" onClick={prevReview}>
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="reviews2-track">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`review2-card ${index === currentReview ? 'active' : ''}`}
                >
                  <div className="review2-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <h4>{review.title}</h4>
                  <p>{review.text}</p>
                  <div className="review2-author">
                    <strong>{review.name}</strong>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next" onClick={nextReview}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="reviews2-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentReview ? 'active' : ''}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>

          <div className="reviews2-cta">
            <div className="review-badge">
              <img src="/images/review-badge.png" alt="5 Star Reviews" />
            </div>
            <Link to="/about" className="btn-outline">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-grid">
            <div className="cta-box cta-primary">
              <h3>Book your cleaner in 60 seconds</h3>
              <p>Using our simple booking form you can have your clean booked in 60 seconds.</p>
              <Link to="/booking" className="btn-white">Get Pricing & Book Online</Link>
            </div>
            <div className="cta-box cta-secondary">
              <h3>Or call our friendly team</h3>
              <p>Get your questions answered with our customer service team!</p>
              <a href="tel:0488352478" className="btn-outline-white">
                <i className="fas fa-phone"></i> Call 0488 352 478
              </a>
              <span className="cta-hours">enquiries MON-FRI 8:30am - 5pm AEST</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home2;