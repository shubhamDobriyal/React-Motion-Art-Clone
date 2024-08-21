// Header.js
import React from 'react';
import Logo from "../../assets/MotionArtEffect-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <button className="purchase-btn">Purchase Now</button>
    </div>
  );
}

export default Header;
