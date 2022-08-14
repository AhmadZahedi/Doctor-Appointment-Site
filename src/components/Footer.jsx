import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="rightCol">
        <ul className="footer-list">
          <li>ورود پزشکان</li>
          <li>ثبت نام پزشکان (دریافت صفحه نوبت)</li>
        </ul>
      </div>
      <div className="centerCol">
        <ul className="footer-list">
          <li>ارائه سیستم نوبت دهی اینترنتی به مطب ها</li>
          <li>تلفن های پشتیبانی </li>
          <li>صفحه نخست</li>
          <li>پرسش و پاسخ پزشکی</li>
        </ul>
      </div>
      <div className="leftCol">
        <ul className="footer-list">
          <li>عضویت پزشک</li>
          <li>قوانین سایت</li>
        </ul>
      </div>
      <div className="logoContainer">
        <img alt="logo image" src="../imgs/LunaFinalWhite.png" />
      </div>
    </div>
  );
};

export default Footer;
