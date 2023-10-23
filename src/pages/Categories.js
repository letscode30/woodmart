import React from "react";
import { topChair } from "../data";
import "./categories.css";

const Categories = ({ handleClick }) => {
  return (
    <>
      <div className="container-fluid mt-3">
        <img src="./images/grn-chr.jpg" alt="pic" className="img-fluid" />
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12  mt-3">
            <h3 className="fw-bold text-center product-heading">
              More Products
            </h3>
            <div className="products d-flex flex-column">
              <img
                src="./images/z1.jpg"
                alt="pic"
                className="img-fluid"
                style={{ height: "405px" }}
              />

              <img
                src="./images/z2.jpg"
                alt="pic"
                className="img-fluid mt-2"
                style={{ height: "405px" }}
              />
              <img
                src="./images/z3.jpg"
                alt="pic"
                className="img-fluid mt-2 cat-img"
                style={{ height: "405px" }}
              />
              <img
                src="./images/z4.jpg"
                alt="pic"
                className="img-fluid mt-2 cat-img"
                style={{ height: "405px" }}
              />
              <img
                src="./images/z2.jpg"
                alt="pic"
                className="img-fluid mt-2 cat-img"
                style={{ height: "405px" }}
              />
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="row">
              {topChair.map((tct) => (
                <div className="col-lg-4 col-md-6 col.sm-12 text-center text-dark bg-light p-3 chr-card">
                  <img
                    src={tct.img}
                    alt="pic"
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <h6 className="fw-bold mt-2">{tct.caption}</h6>
                  <h7 className="mb-2">{tct.type}</h7>
                  <h6 className="fw-bold" style={{ color: "#ED7D31" }}>
                    ${tct.price}
                  </h6>

                  <div className="desc-btn">
                    <button className="cart-btn rounded-pill">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
