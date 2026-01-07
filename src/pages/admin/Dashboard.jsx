import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import { mockStats, formatCurrency } from '../../data/mockData';
import './AdminPages.css';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Clients', value: mockStats.totalClients, icon: 'fas fa-users', color: 'blue' },
    { label: 'Active Cleaners', value: mockStats.activeCleaners, icon: 'fas fa-broom', color: 'green' },
    { label: 'Total Bookings', value: mockStats.totalBookings, icon: 'fas fa-calendar-check', color: 'purple' },
    { label: 'Monthly Revenue', value: formatCurrency(mockStats.monthlyRevenue), icon: 'fas fa-dollar-sign', color: 'orange' }
  ];

  const recentActivity = [
    { type: 'booking', icon: 'fas fa-calendar-plus', color: 'blue', text: 'New booking from Sarah Johnson', time: '2 hours ago' },
    { type: 'completed', icon: 'fas fa-check', color: 'green', text: 'Job completed by Maria Garcia', time: '4 hours ago' },
    { type: 'payment', icon: 'fas fa-dollar-sign', color: 'purple', text: 'Payment received: $189', time: '5 hours ago' },
    { type: 'cleaner', icon: 'fas fa-user-plus', color: 'orange', text: 'New cleaner registration: Ana Rodriguez', time: '1 day ago' },
    { type: 'review', icon: 'fas fa-star', color: 'yellow', text: '5-star review from Michael Chen', time: '1 day ago' }
  ];

  return (
    <DashboardLayout type="admin">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Admin Dashboard</h1>
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
          {/* Quick Stats */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Quick Stats</h2>
            </div>
            <div className="card-content">
              <div className="quick-stats-list">
                <div className="quick-stat-item">
                  <span className="stat-label">Pending Bookings</span>
                  <span className="stat-value">{mockStats.pendingBookings}</span>
                </div>
                <div className="quick-stat-item">
                  <span className="stat-label">Completed This Month</span>
                  <span className="stat-value">{mockStats.completedBookings}</span>
                </div>
                <div className="quick-stat-item">
                  <span className="stat-label">Average Rating</span>
                  <span className="stat-value">{mockStats.avgRating} ★</span>
                </div>
                <div className="quick-stat-item">
                  <span className="stat-label">Active Cleaners</span>
                  <span className="stat-value">{mockStats.activeCleaners}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="card-content">
              <div className="quick-actions">
                <Link to="/admin/bookings" className="action-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Bookings</span>
                </Link>
                <Link to="/admin/clients" className="action-item">
                  <i className="fas fa-users"></i>
                  <span>Clients</span>
                </Link>
                <Link to="/admin/cleaners" className="action-item">
                  <i className="fas fa-broom"></i>
                  <span>Cleaners</span>
                </Link>
                <Link to="/admin/services" className="action-item">
                  <i className="fas fa-concierge-bell"></i>
                  <span>Services</span>
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
              {recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className={`activity-icon ${activity.color}`}>
                    <i className={activity.icon}></i>
                  </div>
                  <div className="activity-info">
                    <p>{activity.text}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-stats-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .quick-stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f9fafb;
          border-radius: 8px;
        }
        
        .quick-stat-item .stat-label {
          color: #6b7280;
          font-weight: 500;
        }
        
        .quick-stat-item .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2d77d6;
        }
        
        .activity-icon.yellow {
          background: #fef3c7;
          color: #d97706;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default AdminDashboard;
