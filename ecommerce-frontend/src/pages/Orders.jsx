import React from 'react'

function Orders() {
  return (
    <div className="dashboard">
      <h2>Your Orders</h2>
      <p>No orders yet. Checkout will simulate a purchase (mocked).</p>
      <button
        onClick={() => {
          alert('Mock Checkout completed!');
        }}
      >
        Simulate Checkout
      </button>
    </div>
  );
}

export default Orders