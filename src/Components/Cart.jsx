import React from "react";
import { useContext, useState, useEffect } from "react";
import CartContext from "../Contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div>
        <div className="container cartHeader my-5">
          <h2 className="fw-bold container text-center">Shopping Cart</h2>
        </div>
        <div className="d-flex flex-column align-items-center gap-5 alertContainer">
          <h3 className="border border-danger rounded-2 p-4 text-center emptyText">
            There are no products in the cart.
          </h3>

          <button
            onClick={() => navigate("/")}
            className="btn btn-warning rounded-0 fw-bold startBtn py-2"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container cartHeader my-5">
        <h2 className="fw-bold container text-center">Shopping Cart</h2>
      </div>

      {cartItems &&
        cartItems.map((item, index) => (
          <div key={index}>
            <div className="container cardContainer d-flex justify-content-center">
              <div className="card cardShopping rounded-3 mb-4">
                <div className="card-body card-body-shopping container p-4 d-flex justify-content-between align-items-center">
                  <div className="cartImage container w-100 mb-5">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cartInfo container">
                    <p className="">{item.title}</p>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0">
                        <FontAwesomeIcon className="checked" icon={faStar} />
                      </li>
                      <li className="list-inline-item m-0">
                        <FontAwesomeIcon className="checked" icon={faStar} />
                      </li>
                      <li className="list-inline-item m-0">
                        <FontAwesomeIcon className="checked" icon={faStar} />
                      </li>
                      <li className="list-inline-item m-0">
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fa fa-star-o text-success"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="cartPrice container d-flex justify-content-center">
                    <span className="price fw-bold">
                      {" "}
                      $
                      {item.quantity > 1
                        ? `${item.price} (${item.quantity}) `
                        : item.price}
                    </span>
                  </div>

                  <div className="removeButton container-fluid d-flex">
                    <button
                      className="btn btn-danger ms-md-auto"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="container totalContainer d-flex justify-content-md-end my-3">
        <p className="fw-bold totalPrice">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="container endShopping d-md-flex justify-content-md-between my-5">
        <button onClick={() => navigate("/")} className="btn btn-primary w-25">
          Back to Shopping
        </button>
        <button className="btn btn-primary w-25">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
