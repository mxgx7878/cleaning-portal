import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { mockBookings, formatCurrency, formatDate } from '../../data/mockData';
import './ClientPages.css';

const MyBookings = () => {
  const [filter, setFilter] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showReschedule, setShowReschedule] = useState(false);

  const filteredBookings = filter === 'All' 
    ? mockBookings 
    : mockBookings.filter(b => b.status === filter);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Confirmed': return 'status-confirmed';
      case 'Pending': return 'status-pending';
      case 'Completed': return 'status-completed';
      case 'Cancelled': return 'status-cancelled';
      case 'In Progress': return 'status-in-progress';
      default: return '';
    }
  };

  // Contextual actions based on booking status
  const getActions = (booking) => {
    switch(booking.status) {
      case 'Confirmed':
        return (
          <>
            <button className="btn-outline btn-sm" onClick={() => handleReschedule(booking)}>
              <i className="fas fa-calendar-alt"></i> Reschedule
            </button>
            <button className="btn-secondary btn-sm" onClick={() => handleAddOns(booking)}>
              <i className="fas fa-plus"></i> Add-ons
            </button>
            <button className="btn-danger btn-sm" onClick={() => handleCancel(booking)}>
              <i className="fas fa-times"></i> Cancel
            </button>
          </>
        );
      case 'Pending':
        return (
          <>
            <button className="btn-primary btn-sm" onClick={() => handlePayNow(booking)}>
              <i className="fas fa-credit-card"></i> Pay Now
            </button>
            <button className="btn-outline btn-sm" onClick={() => handleReschedule(booking)}>
              <i className="fas fa-calendar-alt"></i> Change Time
            </button>
            <button className="btn-danger btn-sm" onClick={() => handleCancel(booking)}>
              <i className="fas fa-times"></i> Cancel
            </button>
          </>
        );
      case 'Completed':
        return (
          <>
            <button className="btn-primary btn-sm" onClick={() => handleBookAgain(booking)}>
              <i className="fas fa-redo"></i> Book Again
            </button>
            <button className="btn-outline btn-sm" onClick={() => handleReview(booking)}>
              <i className="fas fa-star"></i> Leave Review
            </button>
            <button className="btn-secondary btn-sm" onClick={() => handleIssue(booking)}>
              <i className="fas fa-exclamation-circle"></i> Report Issue
            </button>
          </>
        );
      default:
        return (
          <button className="btn-outline btn-sm" onClick={() => setSelectedBooking(booking)}>
            <i className="fas fa-eye"></i> View Details
          </button>
        );
    }
  };

  const handleReschedule = (booking) => {
    setSelectedBooking(booking);
    setShowReschedule(true);
  };

  const handleCancel = (booking) => {
    if (window.confirm('Are you sure you want to cancel this booking? Cancellations within 24 hours may incur a fee.')) {
      alert(`Booking ${booking.id} cancelled (Demo mode)`);
    }
  };

  const handleAddOns = (booking) => {
    alert(`Add-ons for booking ${booking.id} (Demo mode)`);
  };

  const handlePayNow = (booking) => {
    alert(`Payment for booking ${booking.id} (Demo mode)`);
  };

  const handleBookAgain = (booking) => {
    alert(`Rebooking ${booking.service} (Demo mode)`);
  };

  const handleReview = (booking) => {
    alert(`Leave review for booking ${booking.id} (Demo mode)`);
  };

  const handleIssue = (booking) => {
    alert(`Report issue for booking ${booking.id} (Demo mode)`);
  };

  return (
    <DashboardLayout type="client">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>My Bookings</h1>
        </div>

        {/* Filters */}
        <div className="filters-bar">
          {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map(status => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Bookings Grid */}
        <div className="bookings-grid">
          {filteredBookings.map(booking => (
            <div key={booking.id} className="booking-card">
              <div className="booking-card-header">
                <div>
                  <h3>{booking.service}</h3>
                  <span className="booking-id">#{booking.id}</span>
                </div>
                <span className={`status-badge ${getStatusClass(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="booking-card-body">
                <div className="detail-row">
                  <span className="detail-label">Date & Time</span>
                  <span className="detail-value">{formatDate(booking.date)} at {booking.time}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Address</span>
                  <span className="detail-value">{booking.address}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value">{booking.duration}</span>
                </div>
                {booking.cleanerName && (
                  <div className="detail-row">
                    <span className="detail-label">Cleaner</span>
                    <span className="detail-value">{booking.cleanerName}</span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">Total</span>
                  <span className="detail-value price">{formatCurrency(booking.price)}</span>
                </div>
              </div>

              <div className="booking-card-actions">
                {getActions(booking)}
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="placeholder-container">
            <div className="placeholder-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h2>No bookings found</h2>
            <p>You don't have any {filter !== 'All' ? filter.toLowerCase() : ''} bookings yet.</p>
          </div>
        )}

        {/* Reschedule Modal */}
        {showReschedule && selectedBooking && (
          <div className="modal-overlay" onClick={() => setShowReschedule(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowReschedule(false)}>
                <i className="fas fa-times"></i>
              </button>
              <h2>Reschedule Booking</h2>
              <p>Select a new date and time for your {selectedBooking.service}.</p>
              
              <div className="form-group">
                <label>New Date</label>
                <input type="date" min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="form-group">
                <label>New Time</label>
                <select>
                  <option value="">Select time</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                </select>
              </div>
              
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowReschedule(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={() => {
                  alert('Booking rescheduled (Demo mode)');
                  setShowReschedule(false);
                }}>
                  Confirm Reschedule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyBookings;
