import React from "react";
import "./css/Register.css";

const Register = () => {
  return (
    <div className="registerBody">
      <div className="registerContainer">
        <form className="registerForm">
          <div className="fieldset">
            <label className="label" htmlFor="firstName">
              نام
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="Name"
              required
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="lastName">
              نام خانوادگی
            </label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              required
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="nationalCode">
              کد ملی
            </label>
            <input
              className="input"
              type="number"
              id="nationalCode"
              name="nationalCode"
              required
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="password">
              رمزعبور
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="rePassword">
              تکرار رمزعبور
            </label>
            <input
              className="input"
              type="password"
              id="rePassword"
              name="rePassword"
              required
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="email">
              ایمیل
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="اختیاری"
            />
          </div>
          <button className="registerButton" type="submit">
            ورود
          </button>
          <a className="registerAnchorTag" href="/login">
            قبلا ثبت نام کرده‌اید؟
          </a>
        </form>
      </div>
      <img
        className="registerLogo"
        alt="logo"
        src="../imgs/LunaFinalWhite.png"
      />
    </div>
  );
};

export default Register;
