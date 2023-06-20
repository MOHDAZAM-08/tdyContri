import React from 'react'
import kit from '../img/DAUGHTERS TOILET (1).jpg';
import Team from '../img/DAUGHTERS TOILET (3).jpg';
import Footernew from './Footernew';
export default function Services() {
  return (
    <div>
    <div className="about">
    <div className="head">SERVICES</div>
    <div className="image-description">
      <div className="image-container">
        <img src={kit} alt="Image" />
      </div>
      <div className="description-container">
        <p><h2 className='yard-heading'>Architecture Design</h2>
        <div className='under-yard'></div>
        <div className='yard-content'> Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</div>
       </p>
      </div>
    </div>

  

  <div className="team-section">
  <div className="team-section__content">
    <div className="team-section__about">

      <p><h2 className='yard-heading'>Interior Design</h2>
      <div className='under-yard'></div>
      <div className='yard-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu justo et nulla sagittis efficitur. Vestibulum id turpis a felis blandit elementum. Duis auctor lorem vel nisi euismod, nec varius nisl iaculis.</div>
      </p>
    </div>
    <div className="team-section__image">
      <img src={Team} alt="Team" />
    </div>
  </div>
</div>

<div className="image-description">
<div className="image-container">
  <img src={kit} alt="Image" />
</div>
<div className="description-container">
  <p><h2 className='yard-heading'>Project Management</h2>
  <div className='under-yard'></div>
  <div className='yard-content'> Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</div>
 </p>
</div>
</div>


<div className="team-section">
<div className="team-section__content">
  <div className="team-section__about">

    <p><h2 className='yard-heading'>Turnkey Project</h2>
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

  <Footernew/>
    </div>
  )
}
