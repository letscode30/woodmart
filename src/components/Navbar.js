import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ size }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img
              src="./images/w1.jpg"
              alt="logo"
              className="img-fluid"
              style={{ height: "80px" }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/b.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Storage
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/l.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/r.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Toys
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/p.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      More
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/categories">
                      <img
                        src="./images/c1.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Chairs
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/t.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Tables
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/c2.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Armchairs
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/f.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Sofas
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/b1.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Beds
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <img
                        src="./images/s.png"
                        alt="chair"
                        className="img-fluid img-nav"
                      />
                      Decor
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/cart">
                  <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
                  <span
                    style={{
                      color: "#ED7D31",
                      marginLeft: "3px",
                    }}
                  >
                    {size}
                  </span>
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
