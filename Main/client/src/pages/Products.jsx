import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Products = ({ productDisplay }) => {
  const navigate = useNavigate();

  const redirectToCheckout = () => {
    navigate('/checkout'); 
  };

  console.log(productDisplay);
  return (
    <div>
      {productDisplay &&
        productDisplay.map((product) => (
          <div key={product._id}>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>${product.price}</div>
            <div>{product.ownerEmail}</div>
            <img src={product.image} alt={product.title} style={{ width: '300px' }}/>
            <div> <button className="buyButton" onClick={redirectToCheckout}> Buy Me! </button> </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
