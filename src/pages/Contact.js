import React from "react";
import "./contact.css"

const Contact = () => {
 
  
  return (

    <>

        <div className="container-fluid mt-3">

              <img src="./images/contact.jpg" alt="pic" className="img-fluid" />
        </div>

        <div className="container mt-3 mb-3">

          <div className="row">

                 <div className="col-lg-6 col-md-6 col-sm-12 d-flex">

                     <div className="me-3 mt-4"> <img src="./images/contact-pic.png" alt="pic" className="img-fluid"/></div>

                     <div style={{marginTop : "70px"}}>
                      <h4 className="fw-bolder">Milano</h4>
                      <p>Piazzale Ferrara<br></br>
                        Via Mincio, 4, 20139</p>
                        <p>Monday – Friday 09:00 – 17:00</p>
                        <p>xtemos@gmail.com<br></br>
                          (686) 492-1044</p>

                  </div>
                 </div>

                 <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
                      
                         <div className="me-3 mt-4"> <img src="./images/contact-pic1.png" alt="pic" className="img-fluid"/></div>

                     <div style={{marginTop : "70px"}}>
                      <h4 className="fw-bolder">Torino</h4>
                      <p>Shopville Le Gru<br></br>
                        Via Chisola, 5, 10126</p>
                        <p>Monday – Friday 09:00 – 17:00</p>
                        <p>xtemos@gmail.com<br></br>
                          (686) 492-1044</p>

                  </div>

                
                 </div>

          </div>
        </div>

        <div className="container mt-5"> 
        
               <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12">
    
                                 <h3 className="fw-bolder mb-4">Contact with an expert</h3>

                       <div>


                          <form>
  <div class="form-group">
 
    <div className="row mb-3">
         <div className="col-12">
        
    <input type="email" class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
    
         </div>

    </div>
    <div className="row mb-3">
         <div className="col-12">
        
    <input type="number" class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone'/>
    
         </div>

    </div>
    <div className="row mb-3">
         <div className="col-12">
   <textarea class="form-control mt-1 rounded" id="textAreaExample6" rows="6" placeholder="Enter your Message"  name="message" spellcheck="false"></textarea>
    
         </div>

    </div>
  </div>
  
  <button type="submit" class="cart-btn rounded-pill mb-4">Send Message</button>
</form>
                       </div>
                          
                    </div>

                      <div className="col-lg-6 col-md-12 col-sm-12 ">

                            <h3 className="fw-bolder ms-4 mb-4">Frequently asked questions</h3>
                            <div>
                              <ul>
                              <li className="q-list border-bottom fs-6 mb-5"> My order hasn't arrived yet.where is it?</li>
                              <p className="q-ans ">A seemingly elegant design can quickly begin to bloat with unexpected content or break<br></br> under the weight of actual activity.
                              Fake data can ensure a nice looking layout but
                              it<br></br> doesn’t reflect what a living, breathing application must endure. Real data does.</p>

                              <li className="q-list border-bottom fs-6 mb-5"> Do you deliver on public holidays?</li>
                              <p className="q-ans ">Websites in professional use templating systems. Commercial publishing platforms and<br></br> content management systems ensure 
                              that you can show different text, different data <br></br>using the same template.
                               When it’s about controlling hundreds of articles, product pages<br></br> for web shops.</p>


                               <li className="q-list border-bottom fs-6 mb-5"> Do you deliver to my postcode?</li>
                              <p className="q-ans ">If the copy becomes distracting in the design then you are doing something wrong or
                               they<br></br> are discussing copy changes. It might be a bit annoying but you could tell them that<br></br> that discussion would be
                                best suited for another time. At worst the discussion is at least<br></br> working towards the final goal of your 
                              site where questions about lorem ipsum don’t.</p>


                              </ul>
                            </div>
                            



                      </div>

               </div>


        </div>
       
    </>
  )
};

export default Contact;
