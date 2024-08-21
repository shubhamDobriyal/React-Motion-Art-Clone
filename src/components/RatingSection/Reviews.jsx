// Reviews.js
import React from 'react';
import img4 from "../../assets/motionarteffect-img4.png";

const Reviews = ({ logo }) => {
  return (
    <div className="review-container">
      <div className="rev-icon">
        <img src={logo} alt="reviewer-logo" />
      </div>
      <div className="rev-desc">
        <p>
          <img src={img4} alt="stars-logo" />
        </p>
        <p>
          <strong>4.5</strong> Score, 9 Reviews
        </p>
      </div>
    </div>
  );
}

export default Reviews;
