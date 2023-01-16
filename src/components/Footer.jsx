import React from 'react'
import footerImg from "./images/logo2.png";
const Footer = () => {
  return (
    <div
    className="footer d__flex align__items__center justify__content__center pz-5"
    style={{ padding: "10px 20px", zIndex: "100" }}
  >
    <img src={footerImg} alt="" className="footer__img pointer" width={"200px"} height={"150px"}/>
    <span
      className="copyright"
      style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
    >
      Copyright © 2023 Full stack Web developer John Nikko Boloron. All Rights Reserved.
    </span>
  </div>
);
}

export default Footer