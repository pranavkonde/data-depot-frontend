import React from 'react';
import { Header } from '../../Components';
import { HeroSection } from '../../Containers';
import './LandingPage.scss';

function LandingPage() {
  return (
       <div className="LandingPage">
      <Header />
      <HeroSection/>
    </div>
  )
}

export default LandingPage