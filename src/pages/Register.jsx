import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Register.css";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [nCode, setNCode] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setRPass] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== rPass) alert("WRONG PASSWORD!");
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
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
              onChange={(e) => setFName(e.target.value)}
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
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
          <div className="fieldset">
            <label className="label" htmlFor="nationalCode">
              کد ملی
            </label>
            <input
              className="input numInput"
              type="text"
              inputMode="numeric"
              id="nationalCode"
              name="nationalCode"
              required
              onChange={(e) => setNCode(e.target.value)}
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
              onChange={(e) => setPass(e.target.value)}
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
              onChange={(e) => setRPass(e.target.value)}
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
          <button className="register-button" type="submit">
            ورود
          </button>
          <Link className="register-link" to="/login">
            قبلا ثبت نام کرده‌اید؟
          </Link>
        </form>
      </div>
      <img
        className="register-logo"
        alt="logo"
        src="../imgs/LunaFinalWhite.png"
        onClick={goToHome}
      />
    </div>
  );
};

export default Register;
