import React from 'react';
import './style.css';

const Product = ({id, url, title, size, price, addToCart}) => {

  return (
    <div className="card">
      <img src={url} alt="random" />
      <div className="description-container">
        <div className="description">
          <span>{title}</span>
        </div>
        <div className="size">
          <span>Size: {size}</span>
        </div>
        <div className="price">
          <span><span>&#8377;</span> {price}</span>
        </div>

      <button className="add-to-cart" 
      onClick={()=> addToCart({id, url, title, size, price,})}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product