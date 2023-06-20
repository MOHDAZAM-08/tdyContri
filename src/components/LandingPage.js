import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'

import kit from '../img/liv (16).jpeg';
import Team from '../img/liv (12).jpeg';
import FlipCard from './FlipCard';
import ImageSlider from './ImageSlider';
// import PanelComponent from './ImageSlider';
import Footernew from './Footernew';
import ReviewSection from './ReviewSection';

function LandingPage(...images) {
  return (
    <div className='LandingPage'>
      <Navbar />
      <Carousel />

      <div className="ab">
      <div className="about">
        <div className="head">ABOUT COMPANY</div>
        <div className="image-description">
          <div className="image-container">
            <img src={kit} alt="Image" />
          </div>
          <div className="description-container">
            <p><h2>About company</h2>Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="team-section__content">
          <div className="team-section__about">

            <p><h2>About Our Team</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu justo et nulla sagittis efficitur. Vestibulum id turpis a felis blandit elementum. Duis auctor lorem vel nisi euismod, nec varius nisl iaculis.</p>
          </div>
          <div className="team-section__image">
            <img src={Team} alt="Team" />
          </div>
        </div>
      </div>

      </div>

      <FlipCard />
      {/* <ImageSlider /> */}
      <ReviewSection />
      <Footernew />
    </div>
  )
}

export default LandingPage

