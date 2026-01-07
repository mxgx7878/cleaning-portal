import React, { useState } from 'react';
import './AdminPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './AdminPages.css';
import { mockServices, mockAddOns, formatCurrency } from '../../data/mockData';
import './AdminPages.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <DashboardLayout type="admin">
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Services</h1>
            <p className="page-subtitle">Manage your service offerings</p>
          </div>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}>
            <i className="fas fa-plus"></i> Add Service
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-nav">
          <button 
            className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <i className="fas fa-broom"></i> Services
          </button>
          <button 
            className={`tab-btn ${activeTab === 'addons' ? 'active' : ''}`}
            onClick={() => setActiveTab('addons')}
          >
            <i className="fas fa-puzzle-piece"></i> Add-ons
          </button>
        </div>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="services-grid">
            {mockServices.map(service => (
              <div key={service.id} className="service-admin-card">
                <div className="service-card-header">
                  <span className="service-icon">{service.icon}</span>
                  <div className="service-actions">
                    <button className="btn-icon" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn-icon btn-icon-danger" title="Delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>{service.duration}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-dollar-sign"></i>
                    <span>From {formatCurrency(service.basePrice)}</span>
                  </div>
                </div>

                <div className="service-inclusions">
                  <h4>Includes:</h4>
                  <ul>
                    {service.inclusions.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {item}
                      </li>
                    ))}
                    {service.inclusions.length > 3 && (
                      <li className="more-items">+{service.inclusions.length - 3} more</li>
                    )}
                  </ul>
                </div>

                <button 
                  className="btn-outline-full"
                  onClick={() => setSelectedService(service)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add-ons Tab */}
        {activeTab === 'addons' && (
          <div className="addons-section">
            <div className="addons-header">
              <h3>Available Add-ons</h3>
              <button className="btn-secondary">
                <i className="fas fa-plus"></i> Add New
              </button>
            </div>
            <div className="addons-grid">
              {mockAddOns.map(addon => (
                <div key={addon.id} className="addon-card">
                  <div className="addon-icon">{addon.icon}</div>
                  <div className="addon-info">
                    <h4>{addon.name}</h4>
                    <p>{addon.description}</p>
                  </div>
                  <div className="addon-price">
                    {formatCurrency(addon.price)}
                  </div>
                  <div className="addon-actions">
                    <button className="btn-icon" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn-icon btn-icon-danger" title="Delete">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content modal-lg" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>
                  <span className="service-icon-modal">{selectedService.icon}</span>
                  {selectedService.name}
                </h2>
                <button className="modal-close" onClick={() => setSelectedService(null)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <p className="service-full-description">{selectedService.description}</p>
                
                <div className="service-detail-grid">
                  <div className="detail-box">
                    <h4>Pricing</h4>
                    <p className="price-large">{formatCurrency(selectedService.basePrice)}</p>
                    <span className="price-note">Starting price</span>
                  </div>
                  <div className="detail-box">
                    <h4>Duration</h4>
                    <p className="duration-large">{selectedService.duration}</p>
                    <span className="duration-note">Estimated time</span>
                  </div>
                </div>

                <div className="inclusions-section">
                  <h4>What's Included</h4>
                  <ul className="inclusions-list">
                    {selectedService.inclusions.map((item, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedService.exclusions && selectedService.exclusions.length > 0 && (
                  <div className="exclusions-section">
                    <h4>Not Included</h4>
                    <ul className="exclusions-list">
                      {selectedService.exclusions.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-times-circle"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setSelectedService(null)}>
                  Close
                </button>
                <button className="btn-primary">
                  <i className="fas fa-edit"></i> Edit Service
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Service Modal (placeholder) */}
        {showAddModal && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Add New Service</h2>
                <button className="modal-close" onClick={() => setShowAddModal(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <form className="admin-form">
                  <div className="form-group">
                    <label>Service Name</label>
                    <input type="text" placeholder="Enter service name" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea placeholder="Enter service description" rows="3"></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Base Price (AUD)</label>
                      <input type="number" placeholder="0.00" />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input type="text" placeholder="e.g., 2-3 hours" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Icon (emoji)</label>
                    <input type="text" placeholder="e.g., 🏠" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button className="btn-primary">
                  <i className="fas fa-save"></i> Save Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Services;
