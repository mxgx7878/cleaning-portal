import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { mockServices, mockAddOns, serviceAreas, formatCurrency } from '../../data/mockData';
import './PublicPages.css';

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    addOns: [],
    frequency: 'one-time',
    date: '',
    time: '',
    suburb: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    accessNotes: ''
  });
  const [quote, setQuote] = useState(null);

  const calculateQuote = () => {
    const service = mockServices.find(s => s.id === parseInt(formData.service));
    if (!service) return 0;
    
    let total = service.basePrice;
    
    // Add bedroom/bathroom multiplier
    const bedrooms = parseInt(formData.bedrooms) || 1;
    const bathrooms = parseInt(formData.bathrooms) || 1;
    total += (bedrooms - 1) * 20 + (bathrooms - 1) * 15;
    
    // Add-ons
    formData.addOns.forEach(addOnId => {
      const addOn = mockAddOns.find(a => a.id === addOnId);
      if (addOn) total += addOn.price;
    });
    
    // Frequency discount
    if (formData.frequency === 'weekly') total *= 0.85;
    else if (formData.frequency === 'fortnightly') total *= 0.90;
    else if (formData.frequency === 'monthly') total *= 0.95;
    
    return Math.round(total);
  };

  const handleNext = () => {
    if (step === 2) {
      setQuote(calculateQuote());
    }
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully! (Demo mode - no backend connected)');
    navigate('/login');
  };

  const toggleAddOn = (addOnId) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const selectedService = mockServices.find(s => s.id === parseInt(formData.service));

  return (
    <div className="public-page">
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero page-hero-small">
        <div className="container">
          <h1>BOOK A CLEANING</h1>
          <div className="breadcrumb">
            <Link to="/">HOME</Link>
            <i className="fas fa-chevron-right"></i>
            <span>BOOK NOW</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="content-section">
        <div className="container">
          {/* Progress Steps */}
          <div className="booking-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Service</span>
            </div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Details</span>
            </div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Schedule</span>
            </div>
            <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
              <div className="step-number">4</div>
              <span>Confirm</span>
            </div>
          </div>

          <div className="booking-container">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="booking-step">
                <h2>Select Your Service</h2>
                <div className="service-selection-grid">
                  {mockServices.map(service => (
                    <div 
                      key={service.id}
                      className={`service-option ${formData.service === String(service.id) ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, service: String(service.id)})}
                    >
                      <div className="service-option-icon">{service.icon}</div>
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                      <div className="service-option-meta">
                        <span>{service.duration}</span>
                        <span className="price">From {formatCurrency(service.basePrice)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="booking-actions">
                  <button 
                    className="btn-primary" 
                    onClick={handleNext}
                    disabled={!formData.service}
                  >
                    Continue <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Property Details & Add-ons */}
            {step === 2 && (
              <div className="booking-step">
                <h2>Property Details</h2>
                
                <div className="form-section">
                  <h4>Property Type</h4>
                  <div className="property-type-grid">
                    {['House', 'Apartment', 'Townhouse', 'Office'].map(type => (
                      <div 
                        key={type}
                        className={`property-option ${formData.propertyType === type ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, propertyType: type})}
                      >
                        <i className={`fas fa-${type === 'Office' ? 'building' : 'home'}`}></i>
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <h4>Property Size</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Bedrooms</label>
                      <select 
                        value={formData.bedrooms}
                        onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5,'6+'].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Bathrooms</label>
                      <select 
                        value={formData.bathrooms}
                        onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,'5+'].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Add-ons (Optional)</h4>
                  <div className="addons-grid">
                    {mockAddOns.map(addOn => (
                      <div 
                        key={addOn.id}
                        className={`addon-option ${formData.addOns.includes(addOn.id) ? 'selected' : ''}`}
                        onClick={() => toggleAddOn(addOn.id)}
                      >
                        <div className="addon-check">
                          {formData.addOns.includes(addOn.id) && <i className="fas fa-check"></i>}
                        </div>
                        <div className="addon-info">
                          <span className="addon-name">{addOn.name}</span>
                          <span className="addon-price">+{formatCurrency(addOn.price)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <h4>Booking Frequency</h4>
                  <div className="frequency-options">
                    {[
                      { value: 'one-time', label: 'One-time', discount: null },
                      { value: 'weekly', label: 'Weekly', discount: '15% off' },
                      { value: 'fortnightly', label: 'Fortnightly', discount: '10% off' },
                      { value: 'monthly', label: 'Monthly', discount: '5% off' }
                    ].map(freq => (
                      <div 
                        key={freq.value}
                        className={`frequency-option ${formData.frequency === freq.value ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, frequency: freq.value})}
                      >
                        <span className="freq-label">{freq.label}</span>
                        {freq.discount && <span className="freq-discount">{freq.discount}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="booking-actions">
                  <button className="btn-secondary-outline" onClick={handleBack}>
                    <i className="fas fa-arrow-left"></i> Back
                  </button>
                  <button 
                    className="btn-primary" 
                    onClick={handleNext}
                    disabled={!formData.propertyType || !formData.bedrooms || !formData.bathrooms}
                  >
                    Get Quote <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Schedule & Address */}
            {step === 3 && (
              <div className="booking-step">
                <div className="quote-display">
                  <div className="quote-badge">Your Estimated Quote</div>
                  <div className="quote-amount">{formatCurrency(quote)}</div>
                  <div className="quote-details">
                    {selectedService?.name} • {formData.propertyType} • {formData.bedrooms} bed, {formData.bathrooms} bath
                    {formData.frequency !== 'one-time' && ` • ${formData.frequency}`}
                  </div>
                </div>

                <h2>Schedule Your Cleaning</h2>

                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label>Preferred Time</label>
                      <select 
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      >
                        <option value="">Select time</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Service Address</h4>
                  <div className="form-group">
                    <label>Suburb</label>
                    <select 
                      value={formData.suburb}
                      onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                    >
                      <option value="">Select suburb</option>
                      {serviceAreas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Street Address</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Access Notes (Optional)</label>
                    <textarea 
                      placeholder="Gate code, parking info, key location, pets, etc."
                      rows="3"
                      value={formData.accessNotes}
                      onChange={(e) => setFormData({...formData, accessNotes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="booking-actions">
                  <button className="btn-secondary-outline" onClick={handleBack}>
                    <i className="fas fa-arrow-left"></i> Back
                  </button>
                  <button 
                    className="btn-primary" 
                    onClick={handleNext}
                    disabled={!formData.date || !formData.time || !formData.suburb || !formData.address}
                  >
                    Continue <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Confirm */}
            {step === 4 && (
              <div className="booking-step">
                <div className="quote-display">
                  <div className="quote-badge">Total</div>
                  <div className="quote-amount">{formatCurrency(quote)}</div>
                </div>

                <h2>Your Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        placeholder="04XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-summary">
                    <h4>Booking Summary</h4>
                    <div className="summary-row">
                      <span>Service</span>
                      <span>{selectedService?.name}</span>
                    </div>
                    <div className="summary-row">
                      <span>Property</span>
                      <span>{formData.propertyType} • {formData.bedrooms} bed, {formData.bathrooms} bath</span>
                    </div>
                    <div className="summary-row">
                      <span>Date & Time</span>
                      <span>{formData.date} at {formData.time}</span>
                    </div>
                    <div className="summary-row">
                      <span>Address</span>
                      <span>{formData.address}, {formData.suburb}</span>
                    </div>
                    {formData.addOns.length > 0 && (
                      <div className="summary-row">
                        <span>Add-ons</span>
                        <span>{formData.addOns.map(id => mockAddOns.find(a => a.id === id)?.name).join(', ')}</span>
                      </div>
                    )}
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>{formatCurrency(quote)}</span>
                    </div>
                  </div>

                  <div className="terms-check">
                    <label>
                      <input type="checkbox" required />
                      I agree to the <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                    </label>
                  </div>

                  <div className="booking-actions">
                    <button type="button" className="btn-secondary-outline" onClick={handleBack}>
                      <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Confirm Booking <i className="fas fa-check"></i>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
