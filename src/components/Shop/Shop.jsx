// import React from 'react';
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("prod.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setcart] = useState([]);

  const handelerAddToCart = (product) => {
    const newCart = [...cart, product];
    setcart(newCart);
  };

  return (
    <div className="shopContainer">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelerAddToCart={handelerAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
