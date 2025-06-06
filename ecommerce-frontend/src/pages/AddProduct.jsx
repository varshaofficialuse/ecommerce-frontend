import React, { useState } from 'react';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      image
    };
    console.log('New Product:', newProduct);
    alert('Product added (simulated)');
    setTitle('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="addproduct-container">
      <h2 className="addproduct-title">Add New Product</h2>
      <form onSubmit={handleAdd} className="addproduct-form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
