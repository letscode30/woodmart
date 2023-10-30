import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const stock = 49;
  const [counts, setCounts] = useState({});

  const navigate = useNavigate();

  const setIncrement = (id) => {
    const currentCount = counts[id] || 0;
    if (currentCount < stock) {
      const newCount = currentCount + 1;
      setCounts({ ...counts, [id]: newCount });
    }
  };

  const setDecrement = (id) => {
    const currentCount = counts[id] || 0;
    if (currentCount > 0) {
      const newCount = currentCount - 1;
      setCounts({ ...counts, [id]: newCount });
    }
  };

  //let grandTotal = 0;

  let grandTotal = cart.reduce((total, item) => {
    const subtotal = item.price * (counts[item.id] || 0);
    return total + subtotal;
  }, 0);

  console.log(grandTotal);

  // Iterate through each item in the cart to calculate the grand total
  /*cart.forEach((item) => {
    const subtotal = item.price * (counts[item.id] || 0);
    grandTotal += subtotal;
  });*/

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    console.log(id);
    console.log(arr);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { data: grandTotal } });
  };

  return (
    <div className="container mt-3 mb-2">
      <div className="row bg-light">
        <div className="col-lg-9 col-md-12 col-sm-12 text-center ">
          <table className="table text-center">
            <thead>
              <tr className="cell-head">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody className="crt-table">
              {cart.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-3 table-data ">
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      onClick={() => handleRemove(item.id)}
                    ></i>
                  </td>
                  <td className="p-3 table-data">
                    <img
                      src={item.img}
                      alt="pic"
                      className="img-fluid"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </td>
                  <td className="p-3 table-data">{item.caption}</td>
                  <td className="p-3 table-data">${item.price}</td>
                  <td className="p-3 table-data">
                    <div className="mt-3 d-flex justify-content-center mb-3 me-3">
                      <div>
                        {" "}
                        <input
                          type="button"
                          className="counter-box text-center bg-white  border-white border-3"
                          style={{ width: "25px" }}
                          value="-"
                          onClick={() => setDecrement(item.id)}
                        ></input>
                      </div>
                      <div>
                        {" "}
                        <input
                          type="text"
                          className="counter-box text-center border-white border-3"
                          style={{ width: "40px" }}
                          placeholder={counts[item.id] || 0}
                        ></input>
                      </div>
                      <div>
                        {" "}
                        <input
                          type="button"
                          className="counter-box text-center bg-white border-white border-3"
                          style={{ width: "25px" }}
                          value="+"
                          onClick={() => setIncrement(item.id)}
                        ></input>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 table-data">
                    ${item.price * (counts[item.id] || 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12 bg-light mt-3  text-center">
          <h6 className="fw-bold mb-3">Cart Totals</h6>

          <table class="table mt-2">
            <tbody>
              <tr className="">
                <td className="fw-bold  total">SubTotal</td>
                <td></td>
                <td>${grandTotal}</td>
              </tr>
              <tr>
                <td className="fw-bold total">Shipping</td>
                <td></td>
                <td className="total">Free Shipping</td>
              </tr>
              <tr>
                <td className="fw-bold total">Total</td>
                <td></td>
                <td
                  style={{ color: "#ED7D31", fontWeight: "bold" }}
                  className="total"
                >
                  ${grandTotal}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className="cart-btn rounded-pill" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
