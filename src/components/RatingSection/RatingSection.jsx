// RatingSection.js
import React from 'react';
import Reviews from './Reviews';
import img2 from "../../assets/motionarteffect-img2.png";
import img1 from "../../assets/motionarteffect-img1.png";
import img3 from "../../assets/motionarteffect-img3.png";


const RatingSection = () => {
  return (
    <section className="rating-section">
      <h2>Trusted by thousands of users around the world</h2>
      <div className="rating">
        <Reviews logo={img2} />
        <Reviews logo={img1} />
        <Reviews logo={img3} />
      </div>
    </section>
  );
}

export default RatingSection;
