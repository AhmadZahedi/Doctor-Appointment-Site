import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { doctorsDetails } from "../data";
import "./css/Doctor.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Doctor = () => {
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const id = parseInt(Id, 10);
  let selectedItem = {};
  doctorsDetails.map((item) => {
    if (item.id == id) selectedItem = item;
  });

  console.log(selectedItem);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="upSection">
          <div className="cardButtonsWrapper">
            <div className="card">
              <div className="imgWrapper">
                <img className="img" src={selectedItem.img} />
              </div>
              <div className="infoWrapper">
                <div className="nameWrapper">
                  <div className="name">{selectedItem.name}</div>
                  <VerifiedIcon
                    color="primary"
                    fontSize="20"
                    style={{ paddingRight: "10" }}
                  />
                </div>
                <p className="specialty">{selectedItem.specialty}</p>
                <div className="paramsWrapper">
                  <div className="followersWrapper">
                    <p className="followersCount">456 نفر دنبال کننده</p>
                    <div>followersIcon</div>
                  </div>
                  <div className="gmcNumWrapper">
                    <p className="gmcNum">شماره نظام: 328556</p>
                    <div>SearchVerifiedicon</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonsWrapper">
              <div className="myListButton">
                <PostAddIcon style={{ color: "#ffffff" }} />
                <p className="myListButtonText">لیست من</p>
              </div>
              <div className="getAppointmetnButton">
                <EventAvailableIcon style={{ color: "#ffffff" }} />
                <p className="getAppointmentButtonText">دریافت نوبت اینترنتی</p>
              </div>
            </div>
          </div>
          <div className="timeScheduleWrapper"></div>
        </div>
        <div className="middleSection"></div>
        <div className="downSection"></div>
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
