import React, { useState } from 'react';
import './AdminPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './AdminPages.css';
import { mockBookings, mockCleaners, formatCurrency, formatDate } from '../../data/mockData';
import './AdminPages.css';

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      'Confirmed': 'success',
      'Pending': 'warning',
      'Completed': 'info',
      'Cancelled': 'danger',
      'In Progress': 'primary'
    };
    return colors[status] || 'default';
  };

  return (
    <DashboardLayout type="admin">
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Bookings</h1>
            <p className="page-subtitle">Manage all service bookings</p>
          </div>
          <button className="btn-primary">
            <i className="fas fa-plus"></i> New Booking
          </button>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card mini">
            <span className="stat-value">{mockBookings.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card mini warning">
            <span className="stat-value">{mockBookings.filter(b => b.status === 'Pending').length}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-card mini success">
            <span className="stat-value">{mockBookings.filter(b => b.status === 'Confirmed').length}</span>
            <span className="stat-label">Confirmed</span>
          </div>
          <div className="stat-card mini info">
            <span className="stat-value">{mockBookings.filter(b => b.status === 'Completed').length}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="filters-bar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-tabs">
            {['all', 'Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'].map(status => (
              <button 
                key={status}
                className={`filter-tab ${statusFilter === status ? 'active' : ''}`}
                onClick={() => setStatusFilter(status)}
              >
                {status === 'all' ? 'All' : status}
              </button>
            ))}
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Client</th>
                <th>Service</th>
                <th>Date & Time</th>
                <th>Cleaner</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map(booking => (
                <tr key={booking.id}>
                  <td>
                    <span className="booking-id">{booking.id}</span>
                  </td>
                  <td>
                    <div className="client-cell">
                      <span className="client-name">{booking.clientName}</span>
                    </div>
                  </td>
                  <td>
                    <span className="service-name">{booking.service}</span>
                  </td>
                  <td>
                    <div className="datetime-cell">
                      <span>{formatDate(booking.date)}</span>
                      <span className="text-muted">{booking.time}</span>
                    </div>
                  </td>
                  <td>
                    {booking.cleanerName ? (
                      <span className="cleaner-assigned">{booking.cleanerName}</span>
                    ) : (
                      <button 
                        className="btn-assign"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowAssignModal(true);
                        }}
                      >
                        <i className="fas fa-user-plus"></i> Assign
                      </button>
                    )}
                  </td>
                  <td>
                    <span className="amount">{formatCurrency(booking.price)}</span>
                  </td>
                  <td>
                    <span className={`status-badge status-${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-icon" 
                        title="View"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn-icon" title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-icon" title="More">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Booking Detail Modal */}
        {selectedBooking && !showAssignModal && (
          <div className="modal-overlay" onClick={() => setSelectedBooking(null)}>
            <div className="modal-content modal-lg" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Booking Details</h2>
                <button className="modal-close" onClick={() => setSelectedBooking(null)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-details-grid">
                  <div className="detail-group">
                    <label>Booking ID</label>
                    <p>{selectedBooking.id}</p>
                  </div>
                  <div className="detail-group">
                    <label>Status</label>
                    <span className={`status-badge status-${getStatusColor(selectedBooking.status)}`}>
                      {selectedBooking.status}
                    </span>
                  </div>
                  <div className="detail-group">
                    <label>Client</label>
                    <p>{selectedBooking.clientName}</p>
                  </div>
                  <div className="detail-group">
                    <label>Service</label>
                    <p>{selectedBooking.service}</p>
                  </div>
                  <div className="detail-group">
                    <label>Date & Time</label>
                    <p>{formatDate(selectedBooking.date)} at {selectedBooking.time}</p>
                  </div>
                  <div className="detail-group">
                    <label>Duration</label>
                    <p>{selectedBooking.duration}</p>
                  </div>
                  <div className="detail-group full-width">
                    <label>Address</label>
                    <p>{selectedBooking.address}</p>
                  </div>
                  <div className="detail-group">
                    <label>Assigned Cleaner</label>
                    <p>{selectedBooking.cleanerName || 'Not assigned'}</p>
                  </div>
                  <div className="detail-group">
                    <label>Amount</label>
                    <p className="amount-large">{formatCurrency(selectedBooking.price)}</p>
                  </div>
                  {selectedBooking.notes && (
                    <div className="detail-group full-width">
                      <label>Notes</label>
                      <p>{selectedBooking.notes}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setSelectedBooking(null)}>
                  Close
                </button>
                {!selectedBooking.cleanerName && (
                  <button 
                    className="btn-primary"
                    onClick={() => setShowAssignModal(true)}
                  >
                    <i className="fas fa-user-plus"></i> Assign Cleaner
                  </button>
                )}
                <button className="btn-primary">
                  <i className="fas fa-edit"></i> Edit Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Assign Cleaner Modal */}
        {showAssignModal && selectedBooking && (
          <div className="modal-overlay" onClick={() => setShowAssignModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Assign Cleaner</h2>
                <button className="modal-close" onClick={() => setShowAssignModal(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <p className="assign-info">
                  Select a cleaner for booking <strong>{selectedBooking.id}</strong>
                </p>
                <div className="cleaners-list">
                  {mockCleaners.filter(c => c.status === 'Active').map(cleaner => (
                    <div key={cleaner.id} className="cleaner-option">
                      <div className="cleaner-option-info">
                        <div className="user-avatar small">
                          {cleaner.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <span className="cleaner-name">{cleaner.name}</span>
                          <span className="cleaner-rating">
                            <i className="fas fa-star"></i> {cleaner.rating}
                          </span>
                        </div>
                      </div>
                      <button className="btn-sm btn-primary">Assign</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setShowAssignModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Bookings;
