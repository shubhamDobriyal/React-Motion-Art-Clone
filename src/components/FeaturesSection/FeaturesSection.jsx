import React from 'react';
import Feature from './Feature';
import img6 from "../../assets/motionarteffect-img6.png";
import img7 from "../../assets/motionarteffect-img7.png";
import img9 from "../../assets/motionarteffect-img9.png";

const FeaturesSection = () => (
  <section className="features-section">
    <div className="desc">
      <h2>An All-Round Plugin With Powerful Features</h2>
      <div className="sub-heading">
        <p>
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
    </div>
    <div className="card">
      <Feature
        img={img9}
        heading="Light Weight"
        subHeading="Motion Art for Elementor is designed to be lightweight."
      />
      <Feature
        img={img6}
        heading="100% Responsive"
        subHeading="Create a consistent visual experience across all devices."
      />
      <Feature
        img={img7}
        heading="User Friendly Interface"
        subHeading="Ensure a smooth experience for both applicants and administrators."
      />
    </div>
  </section>
);

export default FeaturesSection;
