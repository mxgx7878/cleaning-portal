import React, { useState } from 'react';
import './CleanerPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './CleanerPages.css';
import { serviceAreas } from '../../data/mockData';
import './CleanerPages.css';
import '../client/ClientPages.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@email.com',
    phone: '0423 456 789',
    abn: '12 345 678 901'
  });

  const [skills, setSkills] = useState([
    'Regular Cleaning',
    'Deep Cleaning',
    'End of Lease',
    'Kitchen Cleaning'
  ]);

  const [availability, setAvailability] = useState({
    monday: { available: true, start: '08:00', end: '17:00' },
    tuesday: { available: true, start: '08:00', end: '17:00' },
    wednesday: { available: true, start: '08:00', end: '17:00' },
    thursday: { available: true, start: '08:00', end: '17:00' },
    friday: { available: true, start: '08:00', end: '17:00' },
    saturday: { available: false, start: '09:00', end: '14:00' },
    sunday: { available: false, start: '', end: '' }
  });

  const [serviceArea, setServiceArea] = useState(['Brisbane City', 'Fortitude Valley', 'South Brisbane']);

  const allSkills = [
    'Regular Cleaning', 'Deep Cleaning', 'End of Lease', 'Commercial Cleaning',
    'Kitchen Cleaning', 'Window Cleaning', 'Carpet Cleaning', 'Bathroom Cleaning'
  ];

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated! (Demo mode)');
  };

  const toggleSkill = (skill) => {
    setSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const toggleArea = (area) => {
    setServiceArea(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  return (
    <DashboardLayout type="cleaner">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>My Profile</h1>
        </div>

        {/* Profile Stats */}
        <div className="stats-grid" style={{ marginBottom: '2rem' }}>
          <div className="stat-card stat-green">
            <div className="stat-icon"><i className="fas fa-star"></i></div>
            <div className="stat-info">
              <span className="stat-value">4.9</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
          <div className="stat-card stat-blue">
            <div className="stat-icon"><i className="fas fa-briefcase"></i></div>
            <div className="stat-info">
              <span className="stat-value">147</span>
              <span className="stat-label">Jobs Completed</span>
            </div>
          </div>
          <div className="stat-card stat-purple">
            <div className="stat-icon"><i className="fas fa-calendar"></i></div>
            <div className="stat-info">
              <span className="stat-value">18 months</span>
              <span className="stat-label">Active Since</span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="dashboard-card" style={{ marginBottom: '1.5rem' }}>
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
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>ABN (Optional)</label>
                <input 
                  type="text"
                  value={profile.abn}
                  onChange={(e) => setProfile({...profile, abn: e.target.value})}
                  placeholder="XX XXX XXX XXX"
                />
              </div>
              <button type="submit" className="btn-primary">Save Changes</button>
            </form>
          </div>
        </div>

        {/* Skills */}
        <div className="dashboard-card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-header">
            <h2>Skills & Services</h2>
          </div>
          <div className="card-content">
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Select the services you're qualified to provide:
            </p>
            <div className="skills-grid">
              {allSkills.map(skill => (
                <label key={skill} className={`skill-item ${skills.includes(skill) ? 'selected' : ''}`}>
                  <input 
                    type="checkbox"
                    checked={skills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="dashboard-card" style={{ marginBottom: '1.5rem' }}>
          <div className="card-header">
            <h2>Service Areas</h2>
          </div>
          <div className="card-content">
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Select the suburbs you're available to work in:
            </p>
            <div className="areas-grid">
              {serviceAreas.map(area => (
                <label key={area} className={`area-item ${serviceArea.includes(area) ? 'selected' : ''}`}>
                  <input 
                    type="checkbox"
                    checked={serviceArea.includes(area)}
                    onChange={() => toggleArea(area)}
                  />
                  <span>{area}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2>Availability</h2>
          </div>
          <div className="card-content">
            <div className="availability-list">
              {Object.entries(availability).map(([day, data]) => (
                <div key={day} className="availability-row">
                  <label className="day-toggle">
                    <input 
                      type="checkbox"
                      checked={data.available}
                      onChange={(e) => setAvailability({
                        ...availability,
                        [day]: { ...data, available: e.target.checked }
                      })}
                    />
                    <span className="day-name">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                  </label>
                  {data.available && (
                    <div className="time-range">
                      <input 
                        type="time"
                        value={data.start}
                        onChange={(e) => setAvailability({
                          ...availability,
                          [day]: { ...data, start: e.target.value }
                        })}
                      />
                      <span>to</span>
                      <input 
                        type="time"
                        value={data.end}
                        onChange={(e) => setAvailability({
                          ...availability,
                          [day]: { ...data, end: e.target.value }
                        })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>
              Save Availability
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid, .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
        }
        
        .skill-item, .area-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .skill-item:hover, .area-item:hover {
          border-color: #2d77d6;
        }
        
        .skill-item.selected, .area-item.selected {
          background: #e8f2ff;
          border-color: #2d77d6;
        }
        
        .skill-item input, .area-item input {
          accent-color: #2d77d6;
        }
        
        .availability-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .availability-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 8px;
        }
        
        .day-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 140px;
          cursor: pointer;
        }
        
        .day-toggle input {
          accent-color: #2d77d6;
          width: 18px;
          height: 18px;
        }
        
        .day-name {
          font-weight: 600;
          color: #374151;
        }
        
        .time-range {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .time-range input {
          padding: 0.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 6px;
          font-size: 0.875rem;
        }
        
        .time-range span {
          color: #6b7280;
        }
        
        @media (max-width: 576px) {
          .availability-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </DashboardLayout>
  );
};

export default Profile;
