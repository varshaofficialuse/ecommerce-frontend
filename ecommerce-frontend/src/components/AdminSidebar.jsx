import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h3 className="admin-sidebar-title">Admin Panel</h3>
      <ul className="admin-sidebar-links">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/products">Manage Products</Link></li>
        <li><Link to="/admin/orders">Manage Orders</Link></li>
        <li><Link to="/admin/users">Manage Users</Link></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;