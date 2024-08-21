// import Logo from "./assets/MotionArtEffect-logo.png";
// import img1 from "./assets/motionarteffect-img1.png";
// import img2 from "./assets/motionarteffect-img2.png";
// import img3 from "./assets/motionarteffect-img3.png";
// import img4 from "./assets/motionarteffect-img4.png";
// import img5 from "./assets/motionarteffect-img5.png";
// import img11 from "./assets/motionarteffect-img11.png";
// import img10 from "./assets/motionarteffect-img10.png";
// import img8 from "./assets/motionarteffect-img8.png";
// import img9 from "./assets/motionarteffect-img9.png";
// import img7 from "./assets/motionarteffect-img7.png";
// import img6 from "./assets/motionarteffect-img6.png";
// import "./App.css";

// function App() {
//   return (
//     <>
//       {/* <section className="header">envato market</section> */}
//       <div className="container">
//         <div className="header">
//           <img src={Logo} alt="logo" />
//           <button className="purchase-btn">Purchase Now</button>
//         </div>
//         <section className="top-container">
// <div className="column">
//   <div className="row" style={{ width: "25%" }}>
//     <h2>
//       <span>
//         <span>Transform Your Website</span>
//       </span>
//     </h2>
//     <div className="subHeading">
//       <p className="motion">With Motion Art Effect</p></div>
//   </div>
//   <div className="row" style={{ width: "54.333%" }}>
//     <h1>
//       Attract Your Visitors Attention With Colorful
//       <span> Motion Art Effect</span>
//       <span></span>
//     </h1>
//     <div className="subHeading">
//       <p>
//         Unleash the power of creativity with Motion Art for Elementor
//         - your ultimate solution for seamlessly integrating
//         captivating animations into your website.
//       </p>
//     </div>
//   </div>
// </div>
//         </section>

//         <section className="rating-section">
//           <h2>Trusted by thousands of users around the world</h2>
//           <div className="rating">
//             <Reviews logo={img2} />
//             <Reviews logo={img1} />
//             <Reviews logo={img3} />
//           </div>
//         </section>

//         <section className="promotion">
//           <div className="column">
//             <div className="row left">
//               <div className="promotion">
//                 <h2>
//                   Turn Your Cursor Into A Colorful Magic Wand & Charm Your
//                   Visitors
//                 </h2>
//               </div>
//               <div className="sub-heading">
//                 <p>
//                   Motion Art for Elementor is a groundbreaking plugin that
//                   empowers you to effortlessly infuse your website with visually
//                   stunning motion art elements.
//                 </p>
//               </div>
//               <div>
//                 <button>Purchase From Envato</button>
//               </div>
//             </div>
//             <div className="row">
//               <img src={img5} alt="wand-img" />
//             </div>
//           </div>
//         </section>

//         <section className="apply-section">
//           <div><h2>Apply On Any Section Or Enable For Whole Page</h2></div>
//           <div className="section">
//             <ApplySection
//               heading={"Apply On Section"}
//               subHeading={
//                 "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.&nbsp;"
//               }
//               img={img11}
//             />
//             <ApplySection
//               heading={"Apply On Page"}
//               subHeading={
//                 "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
//               }
//               img={img10}
//             />
//           </div>
//         </section>

//         <section className="compatibility-section">
//           <Headings
//             heading={"Supported by All Popular Browsers"}
//             subHeading={
//               "Rest assured, Motion Art is designed to be compatible with all major web browsers."
//             }
//           />

//           <div>
//             <div className="browser-icon"></div>
//             <img src={img8} alt="" />
//           </div>
//         </section>

//         <section className="features-section">
//           <div className="desc">
//           <Headings
//             heading={"An All-Round Plugin With Powerful Features"}
//             subHeading={
//               "Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience."
//             }
//           />
//           </div>
//           <div className="section">
//             <Features
//               img={img9}
//               heading={"Light Weight"}
//               subHeading={
//                 "Motion Art for Elementor is designed to be lightweight."
//               }
//             />{" "}
//             <Features
//               img={img6}
//               heading={"100% Responsive"}
//               subHeading={
//                 "Create a consistent visual experience across all devices."
//               }
//             />
//             <Features
//               img={img7}
//               heading={"User Friendly Interface"}
//               subHeading={
//                 "Ensure a smooth experience for both applicants and administrators."
//               }
//             />
//           </div>
//         </section>
//       </div>
//       <footer className="footer">
//         <div className="copyright">
//           <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
//         </div>
//         <div className="footer-list">
//           <ul>
//             <li>Documentation</li>
//             <li>Support</li>
//           </ul>
//         </div>
//       </footer>
//     </>
//   );
// }

// export function Features({ heading, subHeading, img }) {
//   return (
//     <>
//       <div className="features">
//         <img src={img} alt="" />
//         <Headings heading={heading} subHeading={subHeading} />
//       </div>
//     </>
//   );
// }
// export function Reviews({ logo }) {
//   return (
//     <>
//       <div className="review-container">
//         <div className="rev-icon">
//           <img src={logo} alt="reviewer-logo" />
//         </div>
//         <div className="rev-desc">
//           <p>
//             <img src={img4} alt="stars-logo" />
//           </p>
//           <p>
//             <strong>4.5</strong> Score, 9 Reviews
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export function ApplySection({ heading, subHeading, img }) {
//   return (
//     <>
//       <div>
//         <h2>{heading}</h2>
//         <p>{subHeading}</p>
//         <div>
//           <img src={img} alt="" />
//         </div>
//       </div>
//     </>
//   );
// }

// export function Headings({ heading, subHeading }) {
//   return (
//     <>
//       <div className="heading">
//         <h2>{heading}</h2>
//       </div>
//       <div className="sub-heading">
//         <p>{subHeading}</p>
//       </div>
//     </>
//   );
// }

// export default App;

// App.js
import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopSection/TopSection";
import RatingSection from "./components/RatingSection/RatingSection";
import PromotionSection from "./components/PromotionSection/PromotionSection";
import ApplySection from "./components/ApplySection/ApplySection";
import CompatibilitySection from "./components/CompatibilitySection/CompatibilitySection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container">
          <TopContainer />
          <RatingSection />
          <PromotionSection />
          <ApplySection />
          <CompatibilitySection />
          <FeaturesSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
