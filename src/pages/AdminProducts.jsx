import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      setProducts(products.filter((p) => p.id !== id));
      alert("Product deleted (simulated)");
    }
  };

  return (
    <div className="admin-products-container">
      <h2>Admin - Products List</h2>
      <table className="admin-products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td className="admin-action-cell">
                <div className="admin-action-group">
                  <Link to={`/admin/view/${product.id}`}>
                    <button className="admin-btn-view">View</button>
                  </Link>
                  <Link to={`/admin/edit/${product.id}`}>
                    <button className="admin-btn-edit">Edit</button>
                  </Link>
                  <button
                    className="admin-btn-delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                    
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
