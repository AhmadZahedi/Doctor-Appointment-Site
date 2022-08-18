import React, { useState } from "react";
import "./css/Appointment.css";
import { useLocation } from "react-router-dom";
import { doctorsDetails } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

const Appointment = () => {
  // ************ GET SELECTED DOCTOR **************

  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const id = parseInt(Id, 10);

  let selectedDoctor = {};

  doctorsDetails.map((item) => {
    if (item.id === id) selectedDoctor = item;
  });

  // ************ STATE VARIABLES **************

  const [times, setTimes] = useState([]);
  const [dayValue, setDayValue] = useState("");
  const [clockValue, setClockValue] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");

  // ************ GET TODAY'S DATE **************

  // var dateFormat = new Intl.DateTimeFormat("fa");
  // console.log(dateFormat.format(Date.now()));

  const isoString = new Date().toISOString();
  const date = new Date(isoString);

  const year = new Intl.DateTimeFormat("fa", {
    year: "numeric",
  }).format(date);

  const weekday = new Intl.DateTimeFormat("fa", {
    weekday: "long",
  }).format(date);

  const month = new Intl.DateTimeFormat("fa", {
    month: "long",
  }).format(date);

  const day = new Intl.DateTimeFormat("fa", {
    day: "numeric",
  }).format(date);

  const todayDate = weekday + " " + day + " " + month + " " + year;

  // ************ HANDLE RADIO BUTTONS CLICKS **************

  const handleDayChoice = (e) => {
    selectedDoctor.times.map((item) => {
      if (dayValue === e.target.value) {
        setDayValue("...");
        setClockValue("...");
        setTimes([]);
      } else {
        setDayValue(e.target.value);
        setClockValue("...");
        if (item.day[0].D === e.target.value) {
          setTimes(item.clock);
        }
      }
    });
  };

  const handleChange = (e) => {
    return;
  };

  const handleClockChoice = (e) => {
    setClockValue(e.target.value);
    setShowForm(true);
  };

  // ************ HANDLE FORM SUBMITION **************
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fName, lName, phone);
  };

  return (
    <>
      <Navbar />
      <div className="appointmentContainer">
        <div className="selectedDoctor">
          <div className="doctorImgWrapper">
            <img className="img" alt="Doctor image" src={selectedDoctor.img} />
          </div>
          <div className="doctorInfo">
            <div className="doctorNameWrapper">
              <div className="doctorNameText">دکتر {selectedDoctor.name}</div>
              <VerifiedIcon
                color="primary"
                style={{ fontSize: "30", paddingRight: "10" }}
              />
            </div>
            <div className="doctorSpecialty">{selectedDoctor.specialty}</div>
          </div>
        </div>
        <div className="todaysDate">
          <TodayRoundedIcon style={{ fontSize: 40, color: "#00748e" }} />
          <div className="todaysText">امروز &lArr; {todayDate}</div>
        </div>
        <div className="timeTable">
          <div className="daysCol">
            {selectedDoctor.times.map((item) => (
              <div className="dayCheckboxWrapper" key={item.day[0].dayId}>
                <input
                  type="radio"
                  name="date"
                  id={item.day[0].dayId}
                  value={item.day[0].D}
                  checked={dayValue === item.day[0].D}
                  onChange={handleChange}
                  onClick={handleDayChoice}
                />
                <label className="day" htmlFor={item.day[0].dayId}>
                  {item.day[0].D}
                </label>
              </div>
            ))}
          </div>
          <div className="clocksCol">
            {times?.map((item) => (
              <div key={item.T} className="clockCheckboxWrapper">
                <input
                  type="radio"
                  name="clock"
                  id={item.T}
                  checked={clockValue === item.T}
                  value={item.T}
                  onChange={handleChange}
                  onClick={handleClockChoice}
                />
                <label
                  className={item.isFree ? "freeClock" : "notFreeClock"}
                  htmlFor={item.T}
                >
                  {item.T}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={showForm ? "customerFormSection" : "hidden"}>
          <p className="customerSelectedTime">
            زمان مورد انتخاب شما: روز {dayValue} ساعت {clockValue}
          </p>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="formRow">
              <label className="label" htmlFor="firstName">
                نام
              </label>
              <input
                className="inputField"
                type="text"
                id="firstName"
                name="Name"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

            <div className="formRow">
              <label className="label" htmlFor="surName">
                نام خانوادگی
              </label>
              <input
                className="inputField"
                type="text"
                id="surName"
                name="surName"
                onChange={(e) => setLName(e.target.value)}
              />
            </div>

            <div className="formRow">
              <label className="label" htmlFor="phone">
                شماره تلفن همراه
              </label>
              <input
                className="inputField"
                type="phone"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button className="inputButton" type="submit">
              ثبت نوبت
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
