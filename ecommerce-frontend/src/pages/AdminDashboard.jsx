import React from 'react';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Admin Dashboard</h2>
      <div className="admin-dashboard-cards">
        <div className="admin-dashboard-card">
          <h3>Total Products</h3>
          <p>45</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Users</h3>
          <p>300</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
