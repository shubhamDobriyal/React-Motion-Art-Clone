import React from 'react';

const Feature = ({ img, heading, subHeading }) => (
  <div className="features">
    <img src={img} alt="" />
    <div className="heading">
      <h2>{heading}</h2>
    </div>
    <div className="sub-heading">
      <p>{subHeading}</p>
    </div>
  </div>
);

export default Feature;
