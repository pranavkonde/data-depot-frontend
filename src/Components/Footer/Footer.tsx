import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      {/* <div className="Footer__upperContainer _container">
        <div className="brandContainer columnContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            soluta molestiae quos alias itaque cumque placeat ipsum ut
            similique. Odit?
          </p>
        </div>
        <div className="columnContainer">
          <p className="title">Product</p>
          <p>Product</p>
          <p>Product</p>
        </div>
        <div className="columnContainer">
          <p className="title">Site Map</p>
          <p>Product</p>
          <p>Product</p>
        </div>
        <div className="columnContainer">
          <p className="title">Social</p>
          <p>Product</p>
          <p>Product</p>
        </div>
        <div className="columnContainer">
          <p className="title">Social</p>
          <p>Product</p>
          <p>Product</p>
        </div>
      </div> */}
      <div className="Footer__lowerContainer _container">
        <p>© 2023. All rights reserved &nbsp;|&nbsp; Made by <a href="https://www.lighthouse.storage/" target={"_blank"}>Lighthouse</a> with Love ❤️</p>
      </div>
    </div>
  );
}

export default Footer;
