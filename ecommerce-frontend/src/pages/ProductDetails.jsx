import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error("Product Not Found"));
  }, [id]);
  
  useEffect(()=>{
    console.log(product);
  },[product])
  if(!product)return <p>Loading...</p>
  return (
    <div className="product-details">
      <img src={product?.image} alt={product?.title} className="details-image" />
      <div className="details-info">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p><strong>Price:</strong> ${product?.price}</p>
        <button className="add-btn" onClick={() => {
          const cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
          alert('Added to cart');
        }}>Add to Cart</button>
      </div>
    </div>
  )
  
};

export default ProductDetails;
