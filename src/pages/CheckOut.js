import React from "react";
import "./checkout.css"
import { useLocation } from 'react-router-dom';
import { useState } from "react";

const CheckOut = ({cart}) => {


const [divs, setDivs] = useState([
    { id: 1, show: false, text: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.", label: "Direct bank transfer" },
    { id: 2, show: false, text: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.", label: "Check payments" },
    { id: 3, show: false, text: "Pay with cash upon delivery.", label: " Cash on delivery" },
  ]);


   const handleRadioClick = (id) => {
    const updatedDivs = divs.map((item) =>
      item.id === id ? { ...item, show: true } : { ...item, show: false }
    );
    setDivs(updatedDivs);
  };


   console.log(cart)
  const location = useLocation();
  
 const receivedData = location.state ? location.state.data : null;
 console.log(receivedData)

  const formattedValue = receivedData.toFixed(2);
   console.log(formattedValue)


  return (
    <>
      <div className="container text-center mt-2 mb-2">
        <h2 className="fw-bolder">Woodmart</h2>
      </div>

      <div className="container">

        <div className="checkout-box me-auto ms-auto container">

            <div>

               <div className=" p-3 d-flex bg-light">
                 <img src="./images/one.png" alt="one" className="img-fluid count-box me-2"/>
                <h5 className="fw-bold mt-2 order-heading"> Billing Details</h5>
               </div>
                <form>
                 <div className="row mt-4 mb-4 ms-1  ">

                   <div className="col-lg-6 col-md-12 col-sm-12">

                    <label for="fname" className="me-2">First name:</label><br></br>
                        <input type="text" id="fname" name="fname"  className="border rounded-pill data-field mb-4 "  required/><br></br>
                       
                   </div>

                    <div className= "col-lg-6 col-md-12 col-sm-12">

                 <label for="lname" className="ms-2 me-2">Last name:</label><br></br>
                        <input type="text" id="lname" name="lname"  className="border rounded-pill data-field mb-4 " required/>


                    
                   </div>

                </div>

                 <div className="row mt-4 mb-4 ms-1 ">

                   <div className="col-lg-6 col-md-12 col-sm-12">

                     <label for="fname" className="me-2">Phone:</label><br></br>
                        <input type="number" id="fname" name="fname"  className="border rounded-pill data-field mb-4"  required/><br></br>
                   </div>

                    <div className= "col-lg-6 col-md-12 col-sm-12">

                  <label for="lname" className="ms-2 me-2">Email address:</label><br></br>
                        <input type="email" id="lname" name="lname"  className="border rounded-pill data-field mb-4"  required/>

                    
                   </div>

                </div>

                
                 <div className="row mt-4 mb-4 ms-1  ">

                   <div className="col-lg-6 col-md-12 col-sm-12">

                   <label for="fname" className="me-2">Country/Region:</label><br></br>
                        <input type="text" id="fname" name="fname"  className="border rounded-pill data-field mb-4"  required/><br></br>
                       
                   </div>

                    <div className= "col-lg-6 col-md-12 col-sm-12">

                  <label for="lname" className="ms-2 me-2">Town/City:</label><br></br>
                        <input type="text" id="lname" name="lname"  className="border rounded-pill data-field mb-4"  required/>
                    
                   </div>

                </div>


                 <div className="row mt-4 mb-4 ms-1  ">

                   <div className="col-lg-6 col-md-12 col-sm-12">

                   <label for="fname" className="me-2">Street address:</label><br></br>
                        <input type="text" id="fname" name="fname"  className="border rounded-pill data-field mb-4"  required/><br></br>
                       
                   </div>

                    <div className= "col-lg-6 col-md-12 col-sm-12">

                  <label for="lname" className="ms-2 me-2">Postcode/ZIP:</label><br></br>
                        <input type="number" id="lname" name="lname"  className="border rounded-pill data-field mb-4"  required/>
                    
                   </div>

                </div>

                 <div className="row mb-3">
         <div className="col-12">
   <textarea class="form-control mt-1 rounded" id="textAreaExample6" rows="6" placeholder="notes about your order, e.g. special notes for delivery"  name="message" spellcheck="false"></textarea>
    
         </div>

    </div>
         </form> 
               
            </div>

             <div>

                <div className=" p-3 d-flex bg-light">
                 <img src="./images/two.png" alt="one" className="img-fluid count-box me-2"/>
                <h5 className="fw-bold mt-2 order-heading">Your Order</h5>
               </div>

                   <div>

                     <div>


                       <table className="table text-center">
            <thead>
              <tr className="cell-head">
               
                <th scope="col">Product</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody className="crt-table">
              {cart.map((item) => (
                <tr key={item.id} className="text-center">

                 
                  <td className="p-3 table-data">
                    <img
                      src={item.img}
                      alt="pic"
                      className="img-fluid"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </td>
                  <td className="p-3 table-data">{item.caption}</td>
                  <td></td>
                
                  <td className="p-3 table-data">${item.price}</td>
                
                  
                </tr>

              
              ))}

                 <tr>
                 
                  <td className="fw-bold  total text-center">
                   SubTotal
                  </td>
                   <td></td>
                    <td></td>
                
                  <td className="p-3 table-data">${ formattedValue}</td>
                 
                 
                  
                </tr>
                  <tr>
                 
                  <td className="fw-bold  total text-center">
                  Shipping
                  </td>
                   <td></td>
                    <td></td>
                
                  <td className="p-3 table-data"> Free Shipping</td>
                  
                </tr>
                 <tr>
                 
                  <td className="fw-bold  total text-center">
                 Total
                  </td>
                   <td></td>
                    <td></td>
                
                  <td
                  style={{ color: "#ED7D31", fontWeight: "bold" }}
                  className="total"
                >
                  ${formattedValue}
                </td> 
                  
                </tr>
            </tbody>
          </table>
          <div>
                <div>

                  <p className="text-dark-emphasis">Your order qualifies for free shipping!</p>

                        <div class="progress mb-3">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
      
    </div>

                 </div>
        <div className="bg-danger p-1 bg-opacity-10 mb-3">

          <p className="text-dark-emphasis mt-3 ms-2">Your order is expected to leave our warehouse within 1-7 days.</p>
        </div>

                </div>

                     </div>
                     
                   </div> 
              
             </div>


              <div>

                  <div className=" p-3 d-flex bg-light">
                 <img src="./images/three.png" alt="one" className="img-fluid count-box me-2"/>
                <h5 className="fw-bold mt-2 order-heading">Payment Information</h5>
               </div>
               
    <div className="mt-3 mb-3">
      {divs.map((item) => (
        <div key={item.id}>
          <label className="mb-3">
            <input className="me-2"
              type="radio"
              onClick={() => handleRadioClick(item.id)}
              checked={item.show}
            />
            {item.label}
          </label>
          {item.show && (
            <div className="bg-light text-dark-emphasis"
              style={{
                marginTop: '20px',
                backgroundColor: 'lightblue',
                padding: '15px',
              }}
            >
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>

    <hr></hr>

         <div className="text-center"><button className="order-btn cart-btn rounded-pill">Place Order</button></div>

              </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default CheckOut;

  {/* <div  className="mt-4 mb-4 ms-4 detail-data ">
                   
                     
                         <label for="fname" className="me-2">First name:</label><br></br>
                        <input type="text" id="fname" name="fname"  className="border rounded-pill data-field mb-4 "/><br></br>
                        <label for="lname" className="ms-2 me-2">Last name:</label><br></br>
                        <input type="text" id="lname" name="lname"  className="border rounded-pill data-field mb-4"/>

                        <label for="fname" className="me-2">Phone:</label><br></br>
                        <input type="number" id="fname" name="fname"  className="border rounded-pill data-field mb-4"/><br></br>
                        <label for="lname" className="ms-2 me-2">Email address:</label><br></br>
                        <input type="email" id="lname" name="lname"  className="border rounded-pill data-field mb-4"/>
                
                          <label for="fname" className="me-2">Country/Region:</label><br></br>
                        <input type="number" id="fname" name="fname"  className="border rounded-pill data-field mb-4"/><br></br>
                        <label for="lname" className="ms-2 me-2">Email address:</label><br></br>
                        <input type="email" id="lname" name="lname"  className="border rounded-pill data-field mb-4"/>




                
                </div>*/}