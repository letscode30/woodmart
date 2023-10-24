import React from "react";
import { topCategories } from "../data";
import { useState } from "react";

const ProductSearch = ({ filteredProducts }) => {
  const found = filteredProducts.length > 0;

  return (
    <>
      {found ? (
        <div  className="container d-flex text-center fw-bold">
         

          {filteredProducts.map((product, index) => (
            <div key={index}>
               <img src={product.img} alt="pic" className="img-fluid"/>
              <p> {product.caption}</p>
              <p> ${product.price}</p>
              <p> {product.type}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center fw-bold fs-4 mt-3 mb-3">product not found</p>
        </div>
      )}

      
    </>
  );
};

export default ProductSearch;
