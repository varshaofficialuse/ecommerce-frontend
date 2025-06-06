import React from 'react';

function loadRazorpayScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Checkout() {
  const handlePayment = async () => {
    const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_93stZa7jDdBd2U',
      currency: 'INR',
      amount: 49900, // 499.00 INR
      name: 'My E-Commerce',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Total: ₹499.00</p>
      <button className="razorpay-btn" onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
}

export default Checkout;
