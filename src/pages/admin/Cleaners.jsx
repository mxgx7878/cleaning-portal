import React, { useState } from 'react';
import './AdminPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './AdminPages.css';
import { mockCleaners } from '../../data/mockData';
import './AdminPages.css';

const Cleaners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCleaner, setSelectedCleaner] = useState(null);

  const filteredCleaners = mockCleaners.filter(cleaner => {
    const matchesSearch = cleaner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cleaner.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || cleaner.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout type="admin">
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Cleaners</h1>
            <p className="page-subtitle">Manage your cleaning team</p>
          </div>
          <button className="btn-primary">
            <i className="fas fa-plus"></i> Add Cleaner
          </button>
        </div>

        <div className="filters-bar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search cleaners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${statusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              All ({mockCleaners.length})
            </button>
            <button 
              className={`filter-tab ${statusFilter === 'active' ? 'active' : ''}`}
              onClick={() => setStatusFilter('active')}
            >
              Active ({mockCleaners.filter(c => c.status === 'Active').length})
            </button>
            <button 
              className={`filter-tab ${statusFilter === 'inactive' ? 'active' : ''}`}
              onClick={() => setStatusFilter('inactive')}
            >
              Inactive ({mockCleaners.filter(c => c.status === 'Inactive').length})
            </button>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cleaner</th>
                <th>Contact</th>
                <th>Rating</th>
                <th>Jobs</th>
                <th>Areas</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCleaners.map(cleaner => (
                <tr key={cleaner.id}>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">
                        {cleaner.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="user-info">
                        <span className="user-name">{cleaner.name}</span>
                        <span className="user-id">ID: {cleaner.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-cell">
                      <span>{cleaner.email}</span>
                      <span className="text-muted">{cleaner.phone}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rating-cell">
                      <i className="fas fa-star"></i>
                      <span>{cleaner.rating}</span>
                    </div>
                  </td>
                  <td>
                    <div className="stats-cell">
                      <span className="stat-value">{cleaner.totalJobs}</span>
                      <span className="stat-label">completed</span>
                    </div>
                  </td>
                  <td>
                    <div className="areas-cell">
                      {cleaner.areas?.slice(0, 2).map((area, idx) => (
                        <span key={idx} className="area-tag">{area}</span>
                      ))}
                      {cleaner.areas?.length > 2 && (
                        <span className="area-more">+{cleaner.areas.length - 2}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge status-${cleaner.status.toLowerCase()}`}>
                      {cleaner.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-icon" 
                        title="View"
                        onClick={() => setSelectedCleaner(cleaner)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn-icon" title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-icon btn-icon-danger" title="Deactivate">
                        <i className="fas fa-ban"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cleaner Detail Modal */}
        {selectedCleaner && (
          <div className="modal-overlay" onClick={() => setSelectedCleaner(null)}>
            <div className="modal-content modal-lg" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Cleaner Details</h2>
                <button className="modal-close" onClick={() => setSelectedCleaner(null)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="cleaner-profile">
                  <div className="profile-header">
                    <div className="profile-avatar large">
                      {selectedCleaner.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="profile-info">
                      <h3>{selectedCleaner.name}</h3>
                      <p>{selectedCleaner.email}</p>
                      <p>{selectedCleaner.phone}</p>
                    </div>
                    <div className="profile-rating">
                      <div className="rating-large">
                        <i className="fas fa-star"></i>
                        <span>{selectedCleaner.rating}</span>
                      </div>
                      <span className="rating-label">{selectedCleaner.totalJobs} jobs completed</span>
                    </div>
                  </div>

                  <div className="profile-details">
                    <div className="detail-section">
                      <h4>Skills</h4>
                      <div className="skills-list">
                        {selectedCleaner.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4>Service Areas</h4>
                      <div className="areas-list">
                        {selectedCleaner.areas?.map((area, idx) => (
                          <span key={idx} className="area-tag">{area}</span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4>Availability</h4>
                      <span className="availability-badge">{selectedCleaner.availability}</span>
                    </div>

                    <div className="detail-section">
                      <h4>Member Since</h4>
                      <p>{selectedCleaner.joinDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setSelectedCleaner(null)}>
                  Close
                </button>
                <button className="btn-primary">
                  <i className="fas fa-edit"></i> Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Cleaners;
