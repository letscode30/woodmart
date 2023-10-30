import React from "react";
import "./home.css";
import { topCategories } from "../data";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";



const Home = ({handleClick}) => {


  return (
    <>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src="./images/s1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption carousel-heading">
              <img
                src="./images/f3.png"
                alt="sofa"
                className="rounded-circle img-fluid mb-4 heading-img"
              />
              <h6 className="fw-bold d-inline-block ms-2">
                Discover more products <br></br>in the sofas category
              </h6>
            </div>
            <div class="carousel-caption carousel-desc ">
              <h1 className="fw-bolder ">
                Sectional fabric sofa <br></br> by{" "}
                <img
                  src="./images/steve.png"
                  alt="steve"
                  className="img-fluid carousel-img"
                />{" "}
                Ramon Esteve
              </h1>
            </div>
            <div className="d-flex  btn-shop justify-content-center w-50">
              <button type="button" class="btn btn-light me-3">
                Shop Now
              </button>
              <h2 className="dollar-heading d-inline-block">$3620</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/s2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption carousel-heading">
              <img
                src="./images/decor.png"
                alt="sofa"
                className="rounded-circle img-fluid mb-4 heading-img"
              />
              <h6 className="fw-bold d-inline-block ms-2">
                Discover more products <br></br>in the decor category
              </h6>
            </div>
            <div class="carousel-caption carousel-desc ">
              <h1 className="fw-bolder ">
                Terracotta vase <br></br> by{" "}
                <img
                  src="./images/courteny.png"
                  alt="steve"
                  className="img-fluid carousel-img"
                />{" "}
                Courtney Henry
              </h1>
            </div>
            <div className="d-flex  btn-shop justify-content-center w-50">
              <button type="button" class="btn btn-light me-3">
                Shop Now
              </button>
              <h2 className="dollar-heading d-inline-block">$182</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/s3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption carousel-heading">
              <img
                src="./images/chair.jpg"
                alt="sofa"
                className="rounded-circle img-fluid mb-4 heading-img"
              />
              <h6 className="fw-bold d-inline-block ms-2">
                Discover more products <br></br>in the chair category
              </h6>
            </div>
            <div class="carousel-caption carousel-desc ">
              <h1 className="fw-bolder ">
                Upholstered chair <br></br> by{" "}
                <img
                  src="./images/esther.png"
                  alt="steve"
                  className="img-fluid carousel-img"
                />{" "}
                Esther Howard
              </h1>
            </div>
            <div className="d-flex  btn-shop justify-content-center w-50">
              <button type="button" class="btn btn-light me-3">
                Shop Now
              </button>
              <h2 className="dollar-heading d-inline-block">$468</h2>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i
            class="fa fa-chevron-circle-left arrow"
            aria-hidden="true"
            style={{ fontSize: "3rem" }}
          ></i>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i
            class="fa fa-chevron-circle-right arrow"
            aria-hidden="true"
            style={{ fontSize: "3rem" }}
          ></i>
        </button>
      </div>

      <div className="d-flex flex-column text-center text-dark container mb-4">
        <div>
          <h6>WOODEN ACCESSORIES</h6>
        </div>
        <div>
          <h1 className="fw-bold feat-pro">FEATURED PRODUCTS</h1>
        </div>
        <div>
          <h7>Visit our shop to see amazing creations from our designers.</h7>
        </div>
      </div>

        <div className="container">
       
        <div className="row">

          {

               topCategories.map((tct)=>(
                         
                        
                         
                       <div className="col-lg-3 col-md-6 col.sm-12 text-center text-dark bg-light col-card p-3">


                            <img src={tct.img} alt="pic" className="img-fluid" style={{height : "250px"}}/>

                            <Link to = { `/ProductDetail/${tct.id}`} style={{ textDecoration: "none" }}>
                            <h6 className="fw-bold mt-2 text-dark" >{tct.caption}</h6></Link>
                         
                         
                            <h7 className="mb-2">{tct.type}</h7>
                            <h6 className="fw-bold" style={{color :"#ED7D31"}}>${tct.price}</h6>

                            <div className="desc-btn">

                                 <p className="desc-para">{tct.desc}</p>
                                 <button className="cart-btn rounded-pill" onClick={()=>handleClick(tct)}>Add to Cart</button>
                                 
                            </div>

                                
                       </div>

               ))
             

          }

                 
            

        </div>

        </div>

        

        <div className="container mt-4 bg-light">

             <div className="row">


              <div className="col-lg-4 col-md-12 col-sm-12 text-center">

                 <h3 className="fw-bold mt-5 mb-3">Rules for choosing furniture</h3>
                 <img src="./images/r1.png" alt="pic" className="img-fluid"/>

              </div>

               <div className="col-lg-8 col-md-12 col-sm-12 mt-5">        
                    <p className="mt-5 fw-bold ms-3">
                         Whether living on your own or with a family, your living room is an important space.</p>

                         <p className="ms-3 text-dark-emphasis">This room is where your family spends time together, and it is the room most of your guests will spend<br></br> the 
                         majority of their time in. Choosing furniture that creates a pleasant, welcoming appearance while <br></br>holding up 
                         against the wear and tear of everyday life is the 
                         key in getting this space to work for your<br></br> needs.</p>
                         
                         <ul className="text-dark-emphasis">

                          <li className="mb-2">Choose items in a single color scheme and style</li>
                          <li className="mb-2">Consider the area of the room</li>
                          <li className="mb-2">Do not buy unnecessary pieces of furniture</li>
                         </ul>
                   <div className="vdo-pill mb-5 text-center mt-5 text-white">

                   <div className="vdo-text d-flex flex-column mt-5">

                    <h5>How choose furniture</h5>
                   
                   
                    <h1>SØLREM furniture collection</h1>

                  <a href="https://www.youtube.com/watch?v=vhm8tBGamFA"><i class="fa fa-play-circle-o fa-5x text-white" aria-hidden="true"></i></a>
                      
                   </div>


               </div>
             </div>

        </div>
        </div>
    </>
  );
};

export default Home;
