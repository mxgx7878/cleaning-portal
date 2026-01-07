import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { serviceAreas } from '../../data/mockData';
import './ClientPages.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '0412 345 678',
    suburb: 'Brisbane City'
  });
  
  const [addresses, setAddresses] = useState([
    { id: 1, label: 'Home', address: '123 Queen Street, Brisbane City QLD 4000', isDefault: true },
    { id: 2, label: 'Office', address: '456 George Street, Brisbane CBD QLD 4000', isDefault: false }
  ]);

  const [preferences, setPreferences] = useState({
    ecoFriendly: true,
    fragranceFree: false,
    smsReminders: true,
    emailReminders: true,
    marketingEmails: false,
    pets: 'Dog (friendly)',
    accessNotes: 'Key under doormat. Please lock up when done.'
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated! (Demo mode)');
  };

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    alert('Preferences saved! (Demo mode)');
  };

  return (
    <DashboardLayout type="client">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Account Settings</h1>
        </div>

        {/* Tabs */}
        <div className="account-tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fas fa-user"></i> Profile
          </button>
          <button 
            className={activeTab === 'addresses' ? 'active' : ''}
            onClick={() => setActiveTab('addresses')}
          >
            <i className="fas fa-map-marker-alt"></i> Addresses
          </button>
          <button 
            className={activeTab === 'preferences' ? 'active' : ''}
            onClick={() => setActiveTab('preferences')}
          >
            <i className="fas fa-sliders-h"></i> Preferences
          </button>
          <button 
            className={activeTab === 'security' ? 'active' : ''}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-lock"></i> Security
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Personal Information</h2>
            </div>
            <div className="card-content">
              <form onSubmit={handleProfileSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input 
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Suburb</label>
                    <select 
                      value={profile.suburb}
                      onChange={(e) => setProfile({...profile, suburb: e.target.value})}
                    >
                      {serviceAreas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === 'addresses' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Saved Addresses</h2>
              <button className="btn-outline btn-sm">
                <i className="fas fa-plus"></i> Add Address
              </button>
            </div>
            <div className="card-content">
              <div className="addresses-list">
                {addresses.map(addr => (
                  <div key={addr.id} className={`address-item ${addr.isDefault ? 'default' : ''}`}>
                    <div className="address-info">
                      <div className="address-label">
                        <i className={`fas fa-${addr.label === 'Home' ? 'home' : 'building'}`}></i>
                        <strong>{addr.label}</strong>
                        {addr.isDefault && <span className="default-badge">Default</span>}
                      </div>
                      <p>{addr.address}</p>
                    </div>
                    <div className="address-actions">
                      <button className="btn-sm btn-outline">Edit</button>
                      {!addr.isDefault && (
                        <button className="btn-sm btn-secondary">Set Default</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Cleaning Preferences</h2>
            </div>
            <div className="card-content">
              <form onSubmit={handlePreferencesSubmit}>
                <div className="form-section">
                  <h3>Product Preferences</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={preferences.ecoFriendly}
                        onChange={(e) => setPreferences({...preferences, ecoFriendly: e.target.checked})}
                      />
                      <span>Use eco-friendly products only</span>
                    </label>
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={preferences.fragranceFree}
                        onChange={(e) => setPreferences({...preferences, fragranceFree: e.target.checked})}
                      />
                      <span>Fragrance-free products (allergy-friendly)</span>
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Notifications</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={preferences.smsReminders}
                        onChange={(e) => setPreferences({...preferences, smsReminders: e.target.checked})}
                      />
                      <span>SMS booking reminders</span>
                    </label>
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={preferences.emailReminders}
                        onChange={(e) => setPreferences({...preferences, emailReminders: e.target.checked})}
                      />
                      <span>Email booking reminders</span>
                    </label>
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={preferences.marketingEmails}
                        onChange={(e) => setPreferences({...preferences, marketingEmails: e.target.checked})}
                      />
                      <span>Promotional emails and offers</span>
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Property Information</h3>
                  <div className="form-group">
                    <label>Pets</label>
                    <input 
                      type="text"
                      placeholder="e.g., Dog (friendly), Cat (shy)"
                      value={preferences.pets}
                      onChange={(e) => setPreferences({...preferences, pets: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Access Notes</label>
                    <textarea
                      rows="3"
                      placeholder="Gate code, key location, parking info, etc."
                      value={preferences.accessNotes}
                      onChange={(e) => setPreferences({...preferences, accessNotes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  Save Preferences
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Security Settings</h2>
            </div>
            <div className="card-content">
              <div className="form-section">
                <h3>Change Password</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Password changed (Demo mode)'); }}>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="Enter current password" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Confirm new password" />
                  </div>
                  <button type="submit" className="btn-primary">
                    Update Password
                  </button>
                </form>
              </div>

              <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

              <div className="form-section">
                <h3>Delete Account</h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="btn-danger">
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .account-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        
        .account-tabs button {
          padding: 0.75rem 1.25rem;
          border: 2px solid #e5e7eb;
          background: #fff;
          border-radius: 8px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .account-tabs button:hover {
          border-color: #2d77d6;
          color: #2d77d6;
        }
        
        .account-tabs button.active {
          background: #2d77d6;
          border-color: #2d77d6;
          color: #fff;
        }
        
        .addresses-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .address-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
          background: #f9fafb;
          border-radius: 8px;
          border: 2px solid transparent;
        }
        
        .address-item.default {
          border-color: #2d77d6;
          background: #f0f7ff;
        }
        
        .address-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .address-label i {
          color: #2d77d6;
        }
        
        .default-badge {
          background: #2d77d6;
          color: #fff;
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        
        .address-info p {
          margin: 0;
          color: #6b7280;
        }
        
        .address-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        
        .checkbox-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #2d77d6;
        }
        
        .checkbox-item span {
          color: #374151;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default Account;
