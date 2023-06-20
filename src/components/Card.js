import React from 'react';
import imgR from "../img/pro.jpg"
import uppercoma from '../img/uppercoma.png'
import lowercoma from '../img/lowercoma.png'
// import { IoIosContact } from "react-icons/io";

const Card = (props) => {
  let review = props.reviews;

  return (
    <div className="review-card">
      <div className="card-image">
        {/* <IoIosContact/> */}
        <img className="card-image" src={review.image} alt="Review" />
      </div>
      <div className="card-content">
        <div className="card-title">{review.name}</div>
        <div className='name-under-rev'></div>
        <br/>
        {/* <div className="card-job">{review.job}</div> */}
        <div className="card-text"><img className='coma1' src={uppercoma}></img>{review.text}<img className='coma2' src={lowercoma}></img></div>
      </div>
    </div>
  );
};

export default Card;