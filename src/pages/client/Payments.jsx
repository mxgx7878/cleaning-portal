import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import './ClientPages.css';

const Payments = () => {
  return (
    <DashboardLayout type="client">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Payments</h1>
        </div>

        <div className="placeholder-container">
          <div className="placeholder-icon">
            <i className="fas fa-credit-card"></i>
          </div>
          <h2>Payment Integration</h2>
          <p>
            Secure payment processing, invoice history, and receipt downloads 
            will be available here once the payment system is connected.
          </p>
          <div className="integration-badge">
            <i className="fas fa-cog fa-spin"></i>
            Integration in process
          </div>
        </div>

        {/* Preview of what will be here */}
        <div className="dashboard-card full-width" style={{ marginTop: '2rem', opacity: 0.6 }}>
          <div className="card-header">
            <h2>Coming Soon: Payment Features</h2>
          </div>
          <div className="card-content">
            <div className="features-preview">
              <div className="feature-item">
                <i className="fas fa-file-invoice-dollar"></i>
                <div>
                  <h4>Invoice History</h4>
                  <p>View and download all your invoices</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-receipt"></i>
                <div>
                  <h4>Receipt Downloads</h4>
                  <p>Download receipts for completed payments</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-credit-card"></i>
                <div>
                  <h4>Saved Payment Methods</h4>
                  <p>Securely store cards for faster checkout</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-undo"></i>
                <div>
                  <h4>Refund Status</h4>
                  <p>Track refund requests and status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-preview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .feature-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #f9fafb;
          border-radius: 8px;
        }
        
        .feature-item i {
          font-size: 1.5rem;
          color: #2d77d6;
          flex-shrink: 0;
        }
        
        .feature-item h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          color: #1a1a1a;
        }
        
        .feature-item p {
          margin: 0;
          font-size: 0.875rem;
          color: #6b7280;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default Payments;
