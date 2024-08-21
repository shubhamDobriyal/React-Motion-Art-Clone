// CompatibilitySection.js
import React from 'react';
import img8 from "../../assets/motionarteffect-img8.png";

const CompatibilitySection = () => {
  return (
    <section className="compatibility-section">
      <div className='heading'>
        <h2>Supported by All Popular Browsers</h2>
        <div className="sub-heading">
          <p>
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
        </div>
      </div>
      <div>
        <div className="browser-icon"></div>
        <img src={img8} alt="" />
      </div>
    </section>
  );
}

export default CompatibilitySection;
