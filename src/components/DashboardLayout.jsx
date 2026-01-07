import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ children, type = 'client', user = {} }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const clientLinks = [
    { path: '/client/dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { path: '/client/bookings', label: 'My Bookings', icon: 'fas fa-calendar-alt' },
    { path: '/client/payments', label: 'Payments', icon: 'fas fa-credit-card' },
    { path: '/client/account', label: 'Account', icon: 'fas fa-user-cog' }
  ];

  const cleanerLinks = [
    { path: '/cleaner/dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { path: '/cleaner/available-jobs', label: 'Available Jobs', icon: 'fas fa-search' },
    { path: '/cleaner/my-jobs', label: 'My Jobs', icon: 'fas fa-clipboard-list' },
    { path: '/cleaner/earnings', label: 'Earnings', icon: 'fas fa-dollar-sign' },
    { path: '/cleaner/profile', label: 'Profile', icon: 'fas fa-user' }
  ];

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { path: '/admin/clients', label: 'Clients', icon: 'fas fa-users' },
    { path: '/admin/cleaners', label: 'Cleaners', icon: 'fas fa-broom' },
    { path: '/admin/bookings', label: 'Bookings', icon: 'fas fa-calendar-alt' },
    { path: '/admin/services', label: 'Services', icon: 'fas fa-concierge-bell' },
    { path: '/admin/payments', label: 'Payments', icon: 'fas fa-credit-card' },
    { path: '/admin/settings', label: 'Settings', icon: 'fas fa-cog' }
  ];

  const links = type === 'client' ? clientLinks : type === 'cleaner' ? cleanerLinks : adminLinks;

  const portalTitles = {
    client: 'Client Portal',
    cleaner: 'Cleaner Portal',
    admin: 'Admin Portal'
  };

  const defaultUsers = {
    client: { name: 'Sarah Thompson', email: 'sarah.t@email.com' },
    cleaner: { name: 'Maria Santos', email: 'maria.s@eca.com.au' },
    admin: { name: 'Admin User', email: 'admin@eca.com.au' }
  };

  const currentUser = user.name ? user : defaultUsers[type];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">ECA</span>
          </Link>
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="user-info">
            <span className="user-name">{currentUser.name}</span>
            <span className="user-email">{currentUser.email}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link back-link">
            <i className="fas fa-home"></i>
            <span>Back to Website</span>
          </Link>
          <button className="sidebar-logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        <header className="dashboard-header">
          <button 
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="header-title">
            <h1>{portalTitles[type]}</h1>
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <i className="fas fa-bell"></i>
              <span className="notification-badge">3</span>
            </button>
            <div className="user-dropdown">
              <span className="user-name-short">{currentUser.name.split(' ')[0]}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
