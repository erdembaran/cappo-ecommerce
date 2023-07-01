import React from "react";
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Products({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card h-100 rounded shadow-sm border-0 container">
      <div className="card-body p-2 d-flex flex-column">
        <div className="imageContainer d-flex justify-content-center align-items-center">
          <img src={product.image} alt="" className="mb-3" />
        </div>

        <div className="productInfo">
          <p className="small text-muted">{product.title}</p>
          <span>${product.price}</span>
        </div>

        <div className="rating">
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

        <div className="container-fluid d-flex justify-content-center mt-auto">
          <button className="btn btn-warning w-100" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
