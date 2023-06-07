import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <div className="abtContainer container">
        <section>
          <div className="row mt-5">
            <div className="col col-12 col-md-6 col-lg-6">
              <div className="box">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "./largest-broker.svg"}
                  alt=""
                />
              </div>
            </div>

            <div className="col col-12 col-md-6 col-lg-6 ">
              <div className="box ">
                <div className="abtRight">
                  <h1>Largest stock broker in India</h1>
                  <p>
                    1+ Crore Zerodha clients contribute to over 15% of all
                    retail order volumes in India daily by trading and investing
                    in:
                  </p>
                  <div className="list">
                    <ul>
                      <li>Futures and Options</li>
                      <li>commodity derivatives</li>
                      <li>Currency derivatives</li>
                    </ul>
                    <ul>
                      <li>Stocks & IPOs</li>
                      <li>Direct mutual funds</li>
                      <li>Bonds and Govt.Securities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="universe pt-5 mt-3">
          <div className="uniTop">
            <h2>The Zerodha Universe</h2>

            <div className="subText">
              <p>
                A whole ecosystem of modern investment apps tailored to specific
                needs, built from the ground up
              </p>
            </div>
          </div>

          <div className="uniBottom"></div>
          <div className=" uniLinks row ">
            <p className="links col col-12 col-sm-6">Explore our products</p>

            <p className="links col  col-12 col-sm-6 ">Try Kite demo</p>
          </div>
        </section>

        <section className="pricing mt-5 pt-5">
          <div
            className="row p-5 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col col-lg-4 col-12 col-md-12 pricingLft">
              <h2>Unbeatable pricing</h2>

              <p>
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
              </p>
            </div>

            <div className="col offset-md-1  col-12 col-md-12 col-lg-5">
              <div className="row">
                <div className="col col-12  col-sm-6 col-md-6 p-3  border">
                  <p
                    style={{ fontWeight: "400" }}
                    className="numbers   text-large fs-1"
                  >
                    0
                  </p>
                  <p>Free equity delivery and direct mutual funds</p>
                </div>

                <div className="col col-12  col-sm-6 col-md-6 p-3  border  ">
                  <p style={{ fontWeight: "400" }} className="numbers   fs-1">
                    20
                  </p>

                  <p>Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="varsity mt-5 pt-5">
          <div className="row">
            <div className="col col-12 col-md-6">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "./varsity.svg"}
                alt=""
                srcset=""
              />
            </div>

            <div className="col col-12 col-md-6 pt-5">
              <div style={{ color: "#424242" }} className="row text-start  ">
                <h4>Free and open market education</h4>

                <p className="mt-3 ">
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advanced trading.
                </p>

                <p className="links ">Varsity</p>
              </div>

              <div style={{ color: "#424242" }} className="row   text-start">
                <p className="mt-3">
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </p>

                <p className="links">TradingQ&A</p>
              </div>
            </div>
          </div>
        </section>


        <section className="openAccount mt-5 pt-5">
          <div className="openTxt ">
          <h2>Open a Zerodha account</h2>

          < p className="mt-4 " >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

          </div>


          <div className="bannerBtnDiv mt-5">
            <button className="bannerBtn">Sign up now</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
