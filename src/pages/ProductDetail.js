import React from "react";
import { topCategories } from "../data";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetail = ({handleClick}) => {

 

  const { id } = useParams();

  const product = topCategories.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-3 text-center">
            {product.pic.map((index) => (
              <img
                src={index}
                alt="pic"
                className="img-fluid m-3"
                style={{ height: "250px" }}
              />
            ))}
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-5">
            <h4 className="fw-bold mt-2 text-dark mb-5">{product.caption}</h4>

            <h6 className="text-dark-emphasis mb-3">{product.code}</h6>
            <p className="text-dark-emphasis mb-3">{product.desc}</p>
            <h3 className="fw-bold mb-3" style={{ color: "#ED7D31" }}>
              ${product.price}
            </h3>

              <div className="counter d-flex mb-4 mt-4 ">

              
                <div className="mt-2 mb-2 ">
                   <button className="cart-btn rounded-pill" onClick={()=>handleClick(product)}>
              {product.cart}
            </button></div>

                  
              </div>


                 
           
            <ul className="mt-2">
              <li className="q-list border-bottom fs-6 mb-5">
                Shipping and Returns{" "}
              </li>
              <p className="q-ans ">
                A seemingly elegant design can quickly begin to bloat with
                unexpected content or break under the weight of actual activity.
                Fake data can ensure a nice looking layout but it doesn’t
                reflect what a living, breathing application must endure. Real
                data does.
              </p>

              <li className="q-list border-bottom fs-6 mb-5">Product Care</li>
              <p className="q-ans ">
                Websites in professional use templating systems. Commercial
                publishing platforms and content management systems ensure that
                you can show different text, different data using the same
                template. When it’s about controlling hundreds of articles,
                product pages for web shops.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
