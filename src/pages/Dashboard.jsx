import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Admin Dashboard</h2>
      <p>Here you can manage orders, products, and users (mocked).</p>
      <button
        onClick={() => {
          alert('Mock payment using Razorpay');
        }}
      >
        Simulate Payment
      </button>
    </div>
  );
}

export default Dashboard;