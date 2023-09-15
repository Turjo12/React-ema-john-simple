// import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart }) => {
  //    const cart = props.cart; // Option 1
  //    const {cart} = props; //option 2

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div>
      <h4 className="orderssum">Orders Summery</h4>
      <div className="card-info">
        <p className="text">Selected Items: {cart.length} </p>
        <p className="text">Total Price: $ {totalPrice} </p>
        <p className="text">Shipping Charge: ${totalShipping} </p>
        <p className="text">Tax: ${tax} </p>
        <p className="GrandTotal">Grand Total: ${grandTotal.toFixed(2)} </p>
      </div>

      <div className="buttons">
        <button className="btn btn1">
          Clear Cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="btn btn2">
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
