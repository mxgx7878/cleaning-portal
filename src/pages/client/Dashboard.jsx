import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import { mockBookings, formatCurrency, formatDate } from '../../data/mockData';
import './ClientPages.css';

const Dashboard = () => {
  const upcomingBookings = mockBookings.filter(b => 
    b.status === 'Confirmed' || b.status === 'Pending'
  ).slice(0, 3);

  const stats = [
    { label: 'Total Bookings', value: '12', icon: 'fas fa-calendar-check', color: 'blue' },
    { label: 'Upcoming', value: upcomingBookings.length, icon: 'fas fa-clock', color: 'orange' },
    { label: 'Completed', value: '9', icon: 'fas fa-check-circle', color: 'green' },
    { label: 'Total Spent', value: '$1,847', icon: 'fas fa-dollar-sign', color: 'purple' }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Confirmed': return 'status-confirmed';
      case 'Pending': return 'status-pending';
      case 'Completed': return 'status-completed';
      case 'Cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  return (
    <DashboardLayout type="client">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Dashboard</h1>
          <Link to="/booking" className="btn-primary">
            <i className="fas fa-plus"></i> Book New Service
          </Link>
        </div>

        {/* Stats Cards */}
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
          {/* Upcoming Bookings */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Upcoming Bookings</h2>
              <Link to="/my-bookings" className="view-all">View All</Link>
            </div>
            <div className="card-content">
              {upcomingBookings.length > 0 ? (
                <div className="bookings-list">
                  {upcomingBookings.map(booking => (
                    <div key={booking.id} className="booking-item">
                      <div className="booking-icon">{booking.serviceIcon}</div>
                      <div className="booking-info">
                        <h4>{booking.service}</h4>
                        <p>
                          <i className="fas fa-calendar"></i> {formatDate(booking.date)}
                          <i className="fas fa-clock"></i> {booking.time}
                        </p>
                        <p className="booking-address">
                          <i className="fas fa-map-marker-alt"></i> {booking.address}
                        </p>
                      </div>
                      <div className="booking-meta">
                        <span className={`status-badge ${getStatusClass(booking.status)}`}>
                          {booking.status}
                        </span>
                        <span className="price">{formatCurrency(booking.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <i className="fas fa-calendar-alt"></i>
                  <p>No upcoming bookings</p>
                  <Link to="/booking" className="btn-primary btn-sm">Book Now</Link>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="card-content">
              <div className="quick-actions">
                <Link to="/booking" className="action-item">
                  <i className="fas fa-plus-circle"></i>
                  <span>New Booking</span>
                </Link>
                <Link to="/my-bookings" className="action-item">
                  <i className="fas fa-list"></i>
                  <span>My Bookings</span>
                </Link>
                <Link to="/payments" className="action-item">
                  <i className="fas fa-credit-card"></i>
                  <span>Payments</span>
                </Link>
                <Link to="/account" className="action-item">
                  <i className="fas fa-user-cog"></i>
                  <span>Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="card-content">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon green">
                  <i className="fas fa-check"></i>
                </div>
                <div className="activity-info">
                  <p><strong>Booking Completed</strong> - Deep Cleaning service</p>
                  <span className="activity-time">2 days ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon blue">
                  <i className="fas fa-calendar-plus"></i>
                </div>
                <div className="activity-info">
                  <p><strong>New Booking</strong> - Regular Cleaning scheduled for next week</p>
                  <span className="activity-time">3 days ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon purple">
                  <i className="fas fa-credit-card"></i>
                </div>
                <div className="activity-info">
                  <p><strong>Payment Received</strong> - $189 for End of Lease cleaning</p>
                  <span className="activity-time">1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
