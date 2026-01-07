import React from 'react';
import './AdminPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './AdminPages.css';

const Payments = () => {
  return (
    <DashboardLayout type="admin">
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Payments & Invoices</h1>
            <p className="page-subtitle">Manage payments and generate invoices</p>
          </div>
        </div>

        {/* Integration Notice */}
        <div className="integration-notice">
          <div className="notice-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="notice-content">
            <span className="notice-badge">Integration in process</span>
            <h2>Payment System Coming Soon</h2>
            <p>
              We're currently integrating secure payment processing and invoicing capabilities. 
              This section will include:
            </p>
          </div>
        </div>

        {/* Feature Preview Cards */}
        <div className="feature-preview-grid">
          <div className="feature-preview-card">
            <div className="feature-icon">
              <i className="fas fa-credit-card"></i>
            </div>
            <h3>Payment Processing</h3>
            <ul>
              <li>Accept credit/debit cards</li>
              <li>Bank transfers (BPAY)</li>
              <li>Digital wallets support</li>
              <li>Recurring payment setup</li>
            </ul>
          </div>

          <div className="feature-preview-card">
            <div className="feature-icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <h3>Invoice Management</h3>
            <ul>
              <li>Auto-generate invoices</li>
              <li>GST/ABN compliant</li>
              <li>Email invoices to clients</li>
              <li>Payment reminders</li>
            </ul>
          </div>

          <div className="feature-preview-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Financial Reports</h3>
            <ul>
              <li>Revenue tracking</li>
              <li>Payment history</li>
              <li>Outstanding balances</li>
              <li>Export for accounting</li>
            </ul>
          </div>

          <div className="feature-preview-card">
            <div className="feature-icon">
              <i className="fas fa-undo"></i>
            </div>
            <h3>Refunds & Credits</h3>
            <ul>
              <li>Process refunds</li>
              <li>Issue credits</li>
              <li>Dispute management</li>
              <li>Audit trail</li>
            </ul>
          </div>
        </div>

        {/* Temporary Manual Actions */}
        <div className="manual-actions-section">
          <h3>Need to process a payment now?</h3>
          <p>While the integration is in progress, you can:</p>
          <div className="manual-actions">
            <button className="btn-secondary">
              <i className="fas fa-phone"></i> Contact Support
            </button>
            <button className="btn-secondary">
              <i className="fas fa-envelope"></i> Email Finance Team
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
