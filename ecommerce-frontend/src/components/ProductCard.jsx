import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
<div className="card">
      <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}><button style={{
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>View Details</button></Link>
    </div>  )
}

export default ProductCard