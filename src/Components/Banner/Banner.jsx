import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="bannerContainer container">
        <div className="bannerTop">
          <div className="bannerImgDiv ">
            <img
             
              className="bannerImg img-fluid  col-md-6 "
              src={process.env.PUBLIC_URL + "/banner.png"}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="bannerBottom">
          <div className="bannerTxt">
            <h1 style={{ color: "#424242" }}>Invest in everything</h1>

            <div className="subTxt">
              <p>
                Online platform to invest in stocks, derivatives, mutual funds,
                and more
              </p>
            </div>
          </div>

          <div className="bannerBtnDiv">
            <button className="bannerBtn">Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
