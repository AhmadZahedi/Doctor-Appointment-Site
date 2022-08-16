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
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const id = parseInt(Id, 10);

  const [times, setTimes] = useState([]);
  const [checked, setChecked] = useState(false);

  let selectedDoctor = {};

  doctorsDetails.map((item) => {
    if (item.id === id) selectedDoctor = item;
  });

  const handleClick = (e) => {
    selectedDoctor.times.map((item) => {
      if (item.day === e.target.innerText) {
        setChecked(!checked);
        setTimes(item.clock);
      } else {
      }
    });
  };

  // console.log(times);

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
          <div className="todaysText">امروز &lArr; دوشنبه ۸ مرداد ۱۴۰۰</div>
        </div>
        <div className="timeTable">
          <div className="daysCol">
            {selectedDoctor.times.map((item) => (
              <div key={item.day} className="dayCheckboxWrapper">
                {!checked ? (
                  <RadioButtonUncheckedIcon style={{ color: "#00748e" }} />
                ) : (
                  <CheckCircleOutlineIcon style={{ color: "#00748e" }} />
                )}
                <div className="day" onClick={handleClick}>
                  {item.day}
                </div>
              </div>
            ))}
          </div>
          <div className="clocksCol">
            {times?.map((item) => (
              <div key={item.T} className="clockCheckboxWrapper">
                {item.isFree ? (
                  <RadioButtonUncheckedIcon style={{ color: "#00748e" }} />
                ) : (
                  <CancelOutlinedIcon style={{ color: "#c2006b" }} />
                )}
                <div className={item.isFree ? "freeClock" : "notFreeClock"}>
                  {item.T}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
