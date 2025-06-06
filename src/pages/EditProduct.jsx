import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        const product = res.data;
        setTitle(product.title);
        setPrice(product.price);
        setImage(product.image);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProduct = { title, price, image };
    console.log('Updated Product:', updatedProduct);
    alert('Product updated (simulated)');
    navigate('/admin/products');
  };

 return (
    <div className="admin-editproduct-container">
      <h2 className="admin-editproduct-title">Edit Product</h2>
      <form onSubmit={handleUpdate} className="admin-editproduct-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
