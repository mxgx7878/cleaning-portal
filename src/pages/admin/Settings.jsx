import React, { useState } from 'react';
import './AdminPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './AdminPages.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    companyName: 'Executive Cleaning Assistance',
    email: 'admin@executivecleaningassistance.com',
    phone: '0488 352 478',
    abn: '',
    address: 'Brisbane, QLD',
    currency: 'AUD',
    timezone: 'Australia/Brisbane',
    dateFormat: 'DD/MM/YYYY',
    bookingBuffer: '2',
    cancellationWindow: '24',
    autoConfirm: false,
    requireDeposit: true,
    depositPercent: '20',
    emailNotifications: true,
    smsNotifications: true,
    newBookingAlert: true,
    cancellationAlert: true,
    paymentAlert: true,
  });

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert('Settings saved! (Demo only)');
  };

  return (
    <DashboardLayout type="admin">
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Settings</h1>
            <p className="page-subtitle">Configure your business settings</p>
          </div>
          <button className="btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i> Save Changes
          </button>
        </div>

        <div className="settings-layout">
          {/* Settings Navigation */}
          <div className="settings-nav">
            <button 
              className={`settings-nav-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <i className="fas fa-building"></i> General
            </button>
            <button 
              className={`settings-nav-btn ${activeTab === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveTab('booking')}
            >
              <i className="fas fa-calendar-alt"></i> Booking
            </button>
            <button 
              className={`settings-nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <i className="fas fa-bell"></i> Notifications
            </button>
            <button 
              className={`settings-nav-btn ${activeTab === 'areas' ? 'active' : ''}`}
              onClick={() => setActiveTab('areas')}
            >
              <i className="fas fa-map-marker-alt"></i> Service Areas
            </button>
          </div>

          {/* Settings Content */}
          <div className="settings-content">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="settings-section">
                <h2>Business Information</h2>
                <p className="section-description">Basic details about your business</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={settings.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>ABN (Optional)</label>
                    <input
                      type="text"
                      value={settings.abn}
                      onChange={(e) => handleChange('abn', e.target.value)}
                      placeholder="XX XXX XXX XXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Business Address</label>
                    <input
                      type="text"
                      value={settings.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                  </div>
                </div>

                <h3>Regional Settings</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Currency</label>
                    <select
                      value={settings.currency}
                      onChange={(e) => handleChange('currency', e.target.value)}
                    >
                      <option value="AUD">AUD - Australian Dollar</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleChange('timezone', e.target.value)}
                    >
                      <option value="Australia/Brisbane">Brisbane (AEST)</option>
                      <option value="Australia/Sydney">Sydney (AEST/AEDT)</option>
                      <option value="Australia/Melbourne">Melbourne (AEST/AEDT)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date Format</label>
                    <select
                      value={settings.dateFormat}
                      onChange={(e) => handleChange('dateFormat', e.target.value)}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Booking Settings */}
            {activeTab === 'booking' && (
              <div className="settings-section">
                <h2>Booking Configuration</h2>
                <p className="section-description">Control how bookings work</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label>Booking Buffer (hours)</label>
                    <input
                      type="number"
                      value={settings.bookingBuffer}
                      onChange={(e) => handleChange('bookingBuffer', e.target.value)}
                      min="0"
                    />
                    <span className="form-hint">Minimum hours before a booking can be made</span>
                  </div>
                  <div className="form-group">
                    <label>Cancellation Window (hours)</label>
                    <input
                      type="number"
                      value={settings.cancellationWindow}
                      onChange={(e) => handleChange('cancellationWindow', e.target.value)}
                      min="0"
                    />
                    <span className="form-hint">Free cancellation period before booking</span>
                  </div>
                </div>

                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Auto-confirm Bookings</h4>
                      <p>Automatically confirm bookings when payment is received</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.autoConfirm}
                        onChange={(e) => handleChange('autoConfirm', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Require Deposit</h4>
                      <p>Require deposit for certain services (e.g., end-of-lease)</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.requireDeposit}
                        onChange={(e) => handleChange('requireDeposit', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                {settings.requireDeposit && (
                  <div className="form-group" style={{ maxWidth: '200px' }}>
                    <label>Deposit Percentage</label>
                    <div className="input-with-suffix">
                      <input
                        type="number"
                        value={settings.depositPercent}
                        onChange={(e) => handleChange('depositPercent', e.target.value)}
                        min="0"
                        max="100"
                      />
                      <span className="input-suffix">%</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h2>Notification Preferences</h2>
                <p className="section-description">Configure how you receive alerts</p>
                
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Email Notifications</h4>
                      <p>Receive alerts via email</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>SMS Notifications</h4>
                      <p>Receive alerts via SMS</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.smsNotifications}
                        onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <h3>Alert Types</h3>
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>New Booking Alerts</h4>
                      <p>Get notified when a new booking is made</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.newBookingAlert}
                        onChange={(e) => handleChange('newBookingAlert', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Cancellation Alerts</h4>
                      <p>Get notified when a booking is cancelled</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.cancellationAlert}
                        onChange={(e) => handleChange('cancellationAlert', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Payment Alerts</h4>
                      <p>Get notified when a payment is received</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.paymentAlert}
                        onChange={(e) => handleChange('paymentAlert', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Service Areas Settings */}
            {activeTab === 'areas' && (
              <div className="settings-section">
                <h2>Service Areas</h2>
                <p className="section-description">Define where you provide services</p>
                
                <div className="areas-list-admin">
                  <div className="area-item">
                    <div className="area-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Brisbane CBD</span>
                    </div>
                    <button className="btn-icon btn-icon-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="area-item">
                    <div className="area-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>South Brisbane</span>
                    </div>
                    <button className="btn-icon btn-icon-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="area-item">
                    <div className="area-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Gold Coast</span>
                    </div>
                    <button className="btn-icon btn-icon-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="area-item">
                    <div className="area-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Ipswich</span>
                    </div>
                    <button className="btn-icon btn-icon-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="area-item">
                    <div className="area-info">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Logan</span>
                    </div>
                    <button className="btn-icon btn-icon-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>

                <div className="add-area-form">
                  <input type="text" placeholder="Enter suburb name" />
                  <button className="btn-primary">
                    <i className="fas fa-plus"></i> Add Area
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
