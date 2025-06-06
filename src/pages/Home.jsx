import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to fetch products");
        setLoading(false);
      });
  }, []);
  if(loading)return   <ClipLoader color="#36d7b7" size={40} />

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
