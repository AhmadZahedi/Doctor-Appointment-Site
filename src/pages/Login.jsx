import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  const [flName, setFlName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
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
              onChange={(e) => setFlName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            ورود
          </button>
          <Link className="login-link" to="/register">
            تاکنون ثبت نام نکرده‌اید؟
          </Link>
        </form>
      </div>
      <img
        className="login-logo"
        alt="logo"
        src="../imgs/LunaFinalWhite.png"
        onClick={goToHome}
      />
    </div>
  );
};

export default Login;
