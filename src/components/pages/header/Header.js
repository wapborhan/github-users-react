import React from "react";

export default function Header() {
  return (
    <header>
      <div className="sr_header shadow">
        <section>
          <span className="sr_cross sr_parallelogram">
            <img
              src="https://wapborhan.com/assets/images/logo/logo-dark.png"
              className="sr_logo skew-fix"
              alt="WapBorhan"
            />
          </span>
        </section>
        <section>
          <div className="top-tab">
            <span>
              <a href="tel:+8801620557840">
                <i className="fa fa-phone"></i> (+88)-01620-557-840
              </a>
              <a href="emailto:borhaninfos@gmail.com">
                <i className="fa fa-envelope"></i> borhaninfos@gmail.com
              </a>
            </span>
            <span>
              <a href="http://www.facebook.com/infoborhan">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="http://www.github.com/wapborhan">
                <i className="fab fa-github"></i>
              </a>
              <a href="http://www.twitter.com/wapborhan">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://www.linkedin.com/in/wapborhan">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="http://www.wapborhan.com/">
                <i className="fas fa-globe-asia"></i>
              </a>
            </span>
          </div>
          <div className="sr_topnav" id="mysr_topnav">
            <a href="#">
              <img
                src="https://wapborhan.com/assets/images/logo/logo-dark.png"
                id="res_logo"
              />
            </a>
            <a href="http://code.wapborhan.com" className="active">
              Home
            </a>
            <a href="https://wapborhan.com/more/portfolio/index.html">
              Portfolio
            </a>
            <a href="https://wapborhan.com/#contacts">Contact</a>
            <a href="https://wapborhan.com/more/cv.html">About</a>
            <a
              style={{ fontSize: "15px" }}
              className="icon"
              // onClick={myFunction}
            >
              &#9776;
            </a>
          </div>
        </section>
      </div>
    </header>
  );
}
