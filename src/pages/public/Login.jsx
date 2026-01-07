import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PublicPages.css';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', userType, formData);
    
    // Navigate to appropriate dashboard based on user type
    if (userType === 'client') {
      navigate('/dashboard');
    } else if (userType === 'cleaner') {
      navigate('/cleaner/dashboard');
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <img src="/logo.png" alt="ECA" />
          <span>Executive Cleaning Assistance</span>
        </Link>

        <div className="auth-card">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>

          {/* User Type Tabs */}
          <div className="auth-tabs">
            <button 
              className={userType === 'client' ? 'active' : ''}
              onClick={() => setUserType('client')}
            >
              <i className="fas fa-user"></i> Client
            </button>
            <button 
              className={userType === 'cleaner' ? 'active' : ''}
              onClick={() => setUserType('cleaner')}
            >
              <i className="fas fa-broom"></i> Cleaner
            </button>
            <button 
              className={userType === 'admin' ? 'active' : ''}
              onClick={() => setUserType('admin')}
            >
              <i className="fas fa-cog"></i> Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>
            <button type="submit" className="btn-primary btn-block">
              Sign In
            </button>
          </form>

          {userType === 'client' && (
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
          )}

          <Link to="/" className="back-home">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
