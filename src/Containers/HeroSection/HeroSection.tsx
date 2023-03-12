import React from "react";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="HeroSection _container">
      <div className="HeroSection__ContentBox">
        <p className="title">
          Filecoin
          <br /> Data Depot
        </p>
        <p className="subTitle">
          Data prep for deal making made easy.<br /> Upload files, generate CAR and get CAR links - all in one place.
        </p>
      </div>
      <div className="HeroSection__ImgBox">
        <img src="/LandingPageIcon.png" alt="icon" />
      </div>
    </div>
  );
}

export default HeroSection;
