import React from "react";

const ApplySubSection = ({ className, heading, description, imgSrc }) => (
  <div className={className}>
    <h2>{heading}</h2>
    <p>{description}</p>
    <div className="apply-section-img">
      <img src={imgSrc} alt="" />
    </div>
  </div>
);

export default ApplySubSection;
