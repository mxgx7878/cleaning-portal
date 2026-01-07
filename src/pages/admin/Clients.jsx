import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { mockClients, formatCurrency, formatDate } from '../../data/mockData';
import './AdminPages.css';

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout type="admin">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Clients</h1>
          <button className="btn-primary">
            <i className="fas fa-plus"></i> Add Client
          </button>
        </div>

        {/* Search */}
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input 
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Clients Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Contact</th>
                <th>Suburb</th>
                <th>Bookings</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id}>
                  <td>
                    <div className="client-info">
                      <div className="avatar">{client.name.charAt(0)}</div>
                      <div>
                        <strong>{client.name}</strong>
                        <small>Since {formatDate(client.joinDate)}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{client.email}</div>
                    <small>{client.phone}</small>
                  </td>
                  <td>{client.suburb}</td>
                  <td>{client.totalBookings}</td>
                  <td><strong>{formatCurrency(client.totalSpent)}</strong></td>
                  <td>
                    <span className={`status-badge status-${client.status.toLowerCase()}`}>
                      {client.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn-sm btn-outline" title="View">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn-sm btn-secondary" title="Edit">
                        <i className="fas fa-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: #fff;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          max-width: 400px;
        }
        
        .search-bar i {
          color: #9ca3af;
        }
        
        .search-bar input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 1rem;
          font-family: 'Quicksand', sans-serif;
        }
        
        .client-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #2d77d6;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        
        .client-info small {
          display: block;
          color: #9ca3af;
          font-size: 0.8125rem;
        }
        
        .table-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .status-active {
          background: #dcfce7;
          color: #16a34a;
        }
        
        .status-inactive {
          background: #fee2e2;
          color: #dc2626;
        }
      `}</style>
    </DashboardLayout>
  );
};

export default Clients;
