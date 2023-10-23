import React from "react";
import { useState } from "react";

const CounterBtn = ({ cart }) => {
  console.log(cart);
  const stock = 49;
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const setIncrement = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);

      cart.forEach((item) => {
        const newPrice = item.price * newCount;
        console.log(newPrice);
      });

      console.log(newCount);
    }
  };

  const setDecrementt = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      console.log(newCount);
    }
  };

  return (
    <>
      <div className="mt-3 d-flex justify-content-center mb-3 me-3">
        <div>
          {" "}
          <input
            type="button"
            className="counter-box text-center bg-white  border-white border-3"
            style={{ width: "25px" }}
            value="-"
            onClick={setDecrementt}
          ></input>
        </div>
        <div>
          {" "}
          <input
            type="text"
            className="counter-box text-center border-white border-3"
            style={{ width: "40px" }}
            placeholder={count}
          ></input>
        </div>
        <div>
          {" "}
          <input
            type="button"
            className="counter-box text-center bg-white border-white border-3"
            style={{ width: "25px" }}
            value="+"
            onClick={setIncrement}
          ></input>
        </div>
      </div>
    </>
  );
};

export default CounterBtn;
