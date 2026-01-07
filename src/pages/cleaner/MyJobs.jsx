import React, { useState } from 'react';
import './CleanerPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './CleanerPages.css';
import { mockBookings, formatCurrency, formatDate } from '../../data/mockData';
import './CleanerPages.css';
import '../client/ClientPages.css';

const MyJobs = () => {
  const [filter, setFilter] = useState('All');
  const myJobs = mockBookings.filter(b => b.cleanerId === 'CLN001');

  const filteredJobs = filter === 'All' 
    ? myJobs 
    : myJobs.filter(b => b.status === filter);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Confirmed': return 'status-confirmed';
      case 'In Progress': return 'status-in-progress';
      case 'Completed': return 'status-completed';
      default: return '';
    }
  };

  const getActions = (job) => {
    switch(job.status) {
      case 'Confirmed':
        return (
          <>
            <button className="btn-success btn-sm" onClick={() => handleStartJob(job)}>
              <i className="fas fa-play"></i> Start Job
            </button>
            <button className="btn-outline btn-sm">
              <i className="fas fa-map"></i> Navigate
            </button>
          </>
        );
      case 'In Progress':
        return (
          <>
            <button className="btn-primary btn-sm" onClick={() => handleCompleteJob(job)}>
              <i className="fas fa-check"></i> Complete
            </button>
            <button className="btn-outline btn-sm" onClick={() => handleIssue(job)}>
              <i className="fas fa-exclamation"></i> Report Issue
            </button>
          </>
        );
      case 'Completed':
        return (
          <button className="btn-outline btn-sm">
            <i className="fas fa-eye"></i> View Details
          </button>
        );
      default:
        return null;
    }
  };

  const handleStartJob = (job) => {
    alert(`Starting job ${job.id} (Demo mode)`);
  };

  const handleCompleteJob = (job) => {
    alert(`Completing job ${job.id} (Demo mode)`);
  };

  const handleIssue = (job) => {
    alert(`Reporting issue for job ${job.id} (Demo mode)`);
  };

  return (
    <DashboardLayout type="cleaner">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>My Jobs</h1>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          {['All', 'Confirmed', 'In Progress', 'Completed'].map(status => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="bookings-grid">
          {filteredJobs.map(job => (
            <div key={job.id} className="booking-card">
              <div className="booking-card-header">
                <div>
                  <h3>{job.service}</h3>
                  <span className="booking-id">#{job.id}</span>
                </div>
                <span className={`status-badge ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
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
                  <span className="detail-label">Address</span>
                  <span className="detail-value">{job.address}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Payment</span>
                  <span className="detail-value price">{formatCurrency(job.price)}</span>
                </div>
                {job.notes && (
                  <div className="detail-row">
                    <span className="detail-label">Notes</span>
                    <span className="detail-value">{job.notes}</span>
                  </div>
                )}
              </div>

              <div className="booking-card-actions">
                {getActions(job)}
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="placeholder-container">
            <div className="placeholder-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h2>No jobs found</h2>
            <p>You don't have any {filter !== 'All' ? filter.toLowerCase() : ''} jobs.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyJobs;
