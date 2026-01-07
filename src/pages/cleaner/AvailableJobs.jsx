import React, { useState } from 'react';
import './CleanerPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './CleanerPages.css';
import { mockAvailableJobs, formatCurrency, formatDate } from '../../data/mockData';
import './CleanerPages.css';
import '../client/ClientPages.css';

const AvailableJobs = () => {
  const [filter, setFilter] = useState('all');

  const handleAcceptJob = (job) => {
    if (window.confirm(`Accept this ${job.service} job for ${formatCurrency(job.payment)}?`)) {
      alert(`Job accepted! (Demo mode)`);
    }
  };

  return (
    <DashboardLayout type="cleaner">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Available Jobs</h1>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Jobs
          </button>
          <button 
            className={`filter-btn ${filter === 'nearby' ? 'active' : ''}`}
            onClick={() => setFilter('nearby')}
          >
            <i className="fas fa-map-marker-alt"></i> Nearby
          </button>
          <button 
            className={`filter-btn ${filter === 'today' ? 'active' : ''}`}
            onClick={() => setFilter('today')}
          >
            <i className="fas fa-calendar-day"></i> Today
          </button>
          <button 
            className={`filter-btn ${filter === 'high-pay' ? 'active' : ''}`}
            onClick={() => setFilter('high-pay')}
          >
            <i className="fas fa-dollar-sign"></i> High Pay
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="bookings-grid">
          {mockAvailableJobs.map(job => (
            <div key={job.id} className="booking-card">
              <div className="booking-card-header">
                <div>
                  <h3>{job.service}</h3>
                  <span className="booking-id">#{job.id}</span>
                </div>
                <span className="status-badge status-pending">New</span>
              </div>
              
              <div className="booking-card-body">
                <div className="detail-row">
                  <span className="detail-label">Client</span>
                  <span className="detail-value">{job.clientName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Date & Time</span>
                  <span className="detail-value">{formatDate(job.date)} at {job.time}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value">{job.duration}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{job.address}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Distance</span>
                  <span className="detail-value">
                    <i className="fas fa-map-marker-alt" style={{ color: '#2d77d6', marginRight: '0.25rem' }}></i>
                    {job.distance}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Payment</span>
                  <span className="detail-value price">{formatCurrency(job.payment)}</span>
                </div>
              </div>

              <div className="booking-card-actions">
                <button className="btn-outline btn-sm">
                  <i className="fas fa-info-circle"></i> Details
                </button>
                <button 
                  className="btn-primary btn-sm"
                  onClick={() => handleAcceptJob(job)}
                >
                  <i className="fas fa-check"></i> Accept Job
                </button>
              </div>
            </div>
          ))}
        </div>

        {mockAvailableJobs.length === 0 && (
          <div className="placeholder-container">
            <div className="placeholder-icon">
              <i className="fas fa-search"></i>
            </div>
            <h2>No jobs available</h2>
            <p>Check back later for new cleaning opportunities in your area.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AvailableJobs;
