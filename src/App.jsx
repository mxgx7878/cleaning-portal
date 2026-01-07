import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Services';
import Pricing from './pages/public/Pricing';
import Contact from './pages/public/Contact';
import Booking from './pages/public/Booking';
import Login from './pages/public/Login';
import Register from './pages/public/Register';

// Client Portal
import ClientDashboard from './pages/client/Dashboard';
import ClientBookings from './pages/client/Bookings';
import ClientPayments from './pages/client/Payments';
import ClientAccount from './pages/client/Account';

// Cleaner Portal
import CleanerDashboard from './pages/cleaner/Dashboard';
import CleanerAvailableJobs from './pages/cleaner/AvailableJobs';
import CleanerMyJobs from './pages/cleaner/MyJobs';
import CleanerEarnings from './pages/cleaner/Earnings';
import CleanerProfile from './pages/cleaner/Profile';

// Admin Portal
import AdminDashboard from './pages/admin/Dashboard';
import AdminClients from './pages/admin/Clients';
import AdminCleaners from './pages/admin/Cleaners';
import AdminBookings from './pages/admin/Bookings';
import AdminServices from './pages/admin/Services';
import AdminPayments from './pages/admin/Payments';
import AdminSettings from './pages/admin/Settings';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Client Portal Routes */}
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/bookings" element={<ClientBookings />} />
          <Route path="/client/payments" element={<ClientPayments />} />
          <Route path="/client/account" element={<ClientAccount />} />

          {/* Cleaner Portal Routes */}
          <Route path="/cleaner/dashboard" element={<CleanerDashboard />} />
          <Route path="/cleaner/available-jobs" element={<CleanerAvailableJobs />} />
          <Route path="/cleaner/my-jobs" element={<CleanerMyJobs />} />
          <Route path="/cleaner/earnings" element={<CleanerEarnings />} />
          <Route path="/cleaner/profile" element={<CleanerProfile />} />

          {/* Admin Portal Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/cleaners" element={<AdminCleaners />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
