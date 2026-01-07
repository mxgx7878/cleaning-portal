import React from 'react';
import './CleanerPages.css';
import { Link } from 'react-router-dom';
import './CleanerPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './CleanerPages.css';
import { mockBookings, mockAvailableJobs, formatCurrency, formatDate } from '../../data/mockData';
import './CleanerPages.css';
import '../client/ClientPages.css';

const CleanerDashboard = () => {
  const myJobs = mockBookings.filter(b => b.cleanerId === 'CLN001');
  const todayJobs = myJobs.filter(b => b.status === 'Confirmed');

  const stats = [
    { label: 'This Week', value: '$845', icon: 'fas fa-dollar-sign', color: 'green' },
    { label: "Today's Jobs", value: todayJobs.length, icon: 'fas fa-calendar-day', color: 'blue' },
    { label: 'Completed', value: '147', icon: 'fas fa-check-circle', color: 'purple' },
    { label: 'Rating', value: '4.9 ★', icon: 'fas fa-star', color: 'orange' }
  ];

  return (
    <DashboardLayout type="cleaner">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Dashboard</h1>
          <Link to="/cleaner/available-jobs" className="btn-primary">
            <i className="fas fa-search"></i> Find Jobs
          </Link>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Today's Schedule */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Today's Schedule</h2>
              <Link to="/cleaner/my-jobs" className="view-all">View All</Link>
            </div>
            <div className="card-content">
              {todayJobs.length > 0 ? (
                <div className="bookings-list">
                  {todayJobs.map(job => (
                    <div key={job.id} className="booking-item">
                      <div className="booking-info">
                        <h4>{job.service}</h4>
                        <p>
                          <i className="fas fa-clock"></i> {job.time}
                          <span style={{ margin: '0 0.5rem' }}>•</span>
                          {job.duration}
                        </p>
                        <p className="booking-address">
                          <i className="fas fa-map-marker-alt"></i> {job.address}
                        </p>
                      </div>
                      <div className="booking-meta">
                        <span className="price">{formatCurrency(job.price)}</span>
                        <button className="btn-success btn-sm">Start Job</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <i className="fas fa-calendar-check"></i>
                  <p>No jobs scheduled for today</p>
                </div>
              )}
            </div>
          </div>

          {/* Available Jobs Preview */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Available Jobs</h2>
              <Link to="/cleaner/available-jobs" className="view-all">View All</Link>
            </div>
            <div className="card-content">
              <div className="bookings-list">
                {mockAvailableJobs.slice(0, 3).map(job => (
                  <div key={job.id} className="booking-item">
                    <div className="booking-info">
                      <h4>{job.service}</h4>
                      <p>
                        <i className="fas fa-calendar"></i> {formatDate(job.date)}
                        <i className="fas fa-map-marker-alt" style={{ marginLeft: '0.75rem' }}></i> {job.distance}
                      </p>
                    </div>
                    <div className="booking-meta">
                      <span className="price">{formatCurrency(job.payment)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="card-content">
            <div className="quick-actions" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <Link to="/cleaner/available-jobs" className="action-item">
                <i className="fas fa-search"></i>
                <span>Find Jobs</span>
              </Link>
              <Link to="/cleaner/my-jobs" className="action-item">
                <i className="fas fa-clipboard-list"></i>
                <span>My Jobs</span>
              </Link>
              <Link to="/cleaner/earnings" className="action-item">
                <i className="fas fa-wallet"></i>
                <span>Earnings</span>
              </Link>
              <Link to="/cleaner/profile" className="action-item">
                <i className="fas fa-user-cog"></i>
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CleanerDashboard;
