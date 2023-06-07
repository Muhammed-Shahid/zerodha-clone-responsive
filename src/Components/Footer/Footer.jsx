import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted pt-1 mt-5">

        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="  row mt-3 text-start">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                
                  <img
                    className="w-50"
                    src={process.env.PUBLIC_URL + "./logo.svg"}
                    alt=""
                  />
                </h6>
                <p>
                  <small>
                
                    © 2010 - 2023, Zerodha Broking Ltd. All rights reserved.
                  </small>
                </p>
              </div>

              <div className="col-md-2 col-lg-2  mx-auto mb-4 ">
                <h5 className="fw-bold mb-4">Company</h5>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none ">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className=" links text-reset text-decoration-none">
                    Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    Referral Programme
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2  mx-auto mb-4">
                <h5 className=" fw-bold mb-4">Support</h5>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    Contact us
                  </a>
                </p>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    Support portal
                  </a>
                </p>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    Z-Connect blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="links text-reset text-decoration-none">
                    List of charges
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 mx-auto     mb-md-0 mb-4">
                <h5 className="h5 fw-bold mb-4">Account</h5>
                <p className="links" >Open an account</p>
                <p className="links">Fund transfer</p>
            
              </div>
            </div>
          </div>
        </section>

    
      </footer>
    </div>
  );
}

export default Footer;
