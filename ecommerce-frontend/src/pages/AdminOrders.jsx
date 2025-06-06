import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Using dummy data to mock orders
    const mockOrders = [
      {
        id: 1,
        customerName: "John Doe",
        totalAmount: 120.50,
        status: "Delivered",
        date: "2025-06-01"
      },
      {
        id: 2,
        customerName: "Jane Smith",
        totalAmount: 89.99,
        status: "Pending",
        date: "2025-06-03"
      }
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className="admin-orders-container">
      <h2>Manage Orders</h2>
      <table className="admin-orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
