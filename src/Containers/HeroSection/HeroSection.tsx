import React from 'react';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='HeroSection _container'>

        <div className="HeroSection__ContentBox">
            <p className="title">DATA <br /> DEPOT</p>
            <p className="subTitle">Process your files <br />Use them in FVM contracts</p>
        </div>
        <div className="HeroSection__ImgBox">
            <img src="/LandingPageIcon.png" alt="icon" />
        </div>

    </div>
  )
}

export default HeroSection