// import React from 'react';
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const handelerAddToCart = props.handelerAddToCart;

  const { img, name, seller, quantity, price, stock, ratings, ratingsCount } =
    props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="texts">
        <h3 className="textl"> {name} </h3>
        <h3 className="priceText">Price: ${price} </h3>
        <h4 className="menufect">Manufacturer: {seller} </h4>
        <h5 className="ratings">Rating: {ratings} </h5>
      </div>
      <button
        className="buttoncart"
        onClick={() => handelerAddToCart(props.product)}
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
