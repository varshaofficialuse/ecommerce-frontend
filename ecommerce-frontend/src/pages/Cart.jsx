import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || []);
    setCart(stored);
  }, []);
  const total=cart.reduce((acc,item)=>acc+item.price,0);
  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
          
    </div>
  );
};

export default Cart;
