import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import kit from '../img/liv (16).jpeg';
import Team from '../img/liv (12).jpeg';
import FlipCard from './FlipCard';
import ImageSlider from './ImageSlider';
// import PanelComponent from './ImageSlider';
import Footer from './Footer';
import Footernew from './Footernew';
import ReviewSection from './ReviewSection';
import '../App.css'
import yardf from '../img/liv (10).jpeg'
import yards from '../img/liv (12).jpeg'
import yardt from '../img/liv (17).jpeg'
import Slider from './Slider';
import Services from './Services';

function LandingPage(...images) {
 

  return (
    <div className='LandingPage'>
      <Navbar />
      <Slider/>

      <div className="ab">
      <div className="about">
        <div className="head">ABOUT</div>
        <div className="image-description">
          <div className="image-container">
            <img src={kit} alt="Image" />
          </div>
          <div className="description-container">
            <p><h2 className='yard-heading'>The Design Yard</h2>
            <div className='under-yard'></div>
            <div className='yard-content'> Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</div>
           </p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="team-section__content">
          <div className="team-section__about">

            <p><h2 className='yard-heading'>About Our Team</h2>
            <div className='under-yard'></div>
            <div className='yard-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu justo et nulla sagittis efficitur. Vestibulum id turpis a felis blandit elementum. Duis auctor lorem vel nisi euismod, nec varius nisl iaculis.</div>
            </p>
          </div>
          <div className="team-section__image">
            <img src={Team} alt="Team" />
          </div>
        </div>
      </div>

      </div>

      <FlipCard />
      <ImageSlider/>
      <ReviewSection />
      {/*<Footer/>*/}
      <Footernew></Footernew>
      <Services/>
    </div>
  )
}

export default LandingPage;

