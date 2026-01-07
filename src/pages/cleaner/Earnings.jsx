import React from 'react';
import './CleanerPages.css';
import DashboardLayout from '../../components/DashboardLayout';
import './CleanerPages.css';
import '../client/ClientPages.css';

const Earnings = () => {
  return (
    <DashboardLayout type="cleaner">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Earnings</h1>
        </div>

        <div className="placeholder-container">
          <div className="placeholder-icon">
            <i className="fas fa-wallet"></i>
          </div>
          <h2>Earnings Dashboard</h2>
          <p>
            Track your earnings, view payment history, and manage payouts.
            This feature will be available once the payment system is connected.
          </p>
          <div className="integration-badge">
            <i className="fas fa-cog fa-spin"></i>
            Integration in process
          </div>
        </div>

        {/* Preview of features */}
        <div className="dashboard-card full-width" style={{ marginTop: '2rem', opacity: 0.6 }}>
          <div className="card-header">
            <h2>Coming Soon: Earnings Features</h2>
          </div>
          <div className="card-content">
            <div className="features-preview">
              <div className="feature-item">
                <i className="fas fa-chart-line"></i>
                <div>
                  <h4>Earnings Overview</h4>
                  <p>Weekly, monthly, and yearly earnings summary</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-history"></i>
                <div>
                  <h4>Payment History</h4>
                  <p>View all past payments and job details</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-university"></i>
                <div>
                  <h4>Payout Settings</h4>
                  <p>Configure your bank details for payouts</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-file-invoice-dollar"></i>
                <div>
                  <h4>Tax Documents</h4>
                  <p>Download statements for tax purposes</p>
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

export default Earnings;
