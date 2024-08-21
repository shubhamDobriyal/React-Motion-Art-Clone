import React from 'react';
import ApplySubSection from './ApplySubSection';
import img10 from "../../assets/motionarteffect-img10.png";
import img11 from "../../assets/motionarteffect-img11.png";

const ApplySection = () => (
  <section className="apply-section">
    <div className='desc'>
      <h2>Apply On Any Section Or Enable For Whole Page</h2>
    </div>
    <div className="section">
      <ApplySubSection className="sec-one"
        heading="Apply On Section"
        description="Apply on section is a game-changer, offering an unparalleled way to
          manage applications directly from your website."
        imgSrc={img11}
      />
      <ApplySubSection className="sec-two"
        heading="Apply On Page"
        description="Take your website to new heights with Motion Art for Elementor.
          Embrace the power of motion and animation."
        imgSrc={img10}
      />
    </div>
  </section>
);

export default ApplySection;
