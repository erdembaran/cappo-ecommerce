import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartBadgeCount = cartItems.length;
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light px-0 px-sm-5">
        <div className="container-fluid mx-0 mx-sm-5">
          <a className="navbar-brand fw-bold fs-2 ms-0 ms-md-3">Cappo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-1 gap-md-3 mt-3 mt-md-0 me-0 me-md-3">
              <li className="nav-item d-flex align-items-center gap-1 gap-md-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <FontAwesomeIcon className="Icon" icon={faMagnifyingGlass} />
              </li>

              <li className="nav-item d-flex align-items-center ms-0 ms-md-2 mt-2 mt-md-0">
                <FontAwesomeIcon className="Icon" icon={faHeart} />
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link"
                  aria-current="page"
                  href=""
                >
                  <FontAwesomeIcon className="Icon" icon={faCartShopping} />
                  {cartBadgeCount > 0 && (
                    <span className="badge rounded-pill bg-danger">
                      {cartBadgeCount}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
