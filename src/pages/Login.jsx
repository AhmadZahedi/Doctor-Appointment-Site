import React from "react";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="loginBody">
      <div className="loginContainer">
        <form className="loginForm">
          <div className="fieldset">
            <label className="label" htmlFor="firstLastName">
              نام و نام خانوادگی
            </label>
            <input
              className="input"
              type="text"
              id="firstLastName"
              name="firstLastName"
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
          <button className="loginButton" type="submit">
            ورود
          </button>
          <a className="loginAnchorTag" href="/register">
            تا کنون ثبت نام نکرده‌اید؟
          </a>
        </form>
      </div>
      <img className="loginLogo" alt="logo" src="../imgs/LunaFinalWhite.png" />
    </div>
  );
};

export default Login;
