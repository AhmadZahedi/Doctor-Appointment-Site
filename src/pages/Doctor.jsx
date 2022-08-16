import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { doctorsDetails } from "../data";
import "./css/Doctor.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PolicyIcon from "@mui/icons-material/Policy";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import InstagramIcon from "@mui/icons-material/Instagram";

const Doctor = () => {
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const id = parseInt(Id, 10);
  let selectedItem = {};
  doctorsDetails.map((item) => {
    if (item.id == id) selectedItem = item;
  });

  const starsProducer = (n) => {
    for (let i = 0; i < 5; i++) {
      return <StarOutlineIcon />;
    }
  };

  let navigate = useNavigate();

  const goToMyGithub = () => {
    navigate("/MyGithubAccount");
  };

  const goToApopintmentPage = () => {
    navigate(`/doctor/${Id}/schedule`);
  };

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
                  <div className="name">دکتر {selectedItem.name}</div>
                  <VerifiedIcon
                    color="primary"
                    style={{ fontSize: "30", paddingRight: "10" }}
                  />
                </div>
                <div className="citySpecialtyWrapper">
                  <div className="specialty">{selectedItem.specialty}</div>
                  <div className="city">{selectedItem.city}</div>
                </div>
                <div className="paramsWrapper">
                  <div className="followersWrapper">
                    <div className="followersCount">
                      {selectedItem.followers} دنبالکننده
                    </div>
                    <PersonOutlineIcon color="primary" />
                  </div>
                  <div className="gmcNumWrapper">
                    <div className="gmcNum">شماره نظام: {selectedItem.gmc}</div>
                    <PolicyIcon color="primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonsWrapper">
              <div className="myListButton">
                <PostAddIcon style={{ color: "#ffffff" }} />
                <p className="myListButtonText">لیست من</p>
              </div>
              <div
                className="getAppointmetnButton"
                onClick={goToApopintmentPage}
              >
                <EventAvailableIcon style={{ color: "#ffffff" }} />
                <p className="getAppointmentButtonText">دریافت نوبت اینترنتی</p>
              </div>
            </div>
          </div>
          <div className="furtherInformation">
            <h3 className="furtherInformationTitle">
              اطلاعات تکمیلی <hr />
            </h3>
            <div className="furtherInformationText">
              <div className="university">
                {selectedItem.specialty} فارغ التحصیل از دانشگاه
                {` ` + selectedItem.uni}
              </div>
              <p className="address">آدرس: {selectedItem.address}</p>
              <p className="phone">تلفن تماس :{selectedItem.phone}</p>
              <p className="timeText">{selectedItem.timeText}</p>
            </div>
            <div className="connections">
              <div className="instagram" onClick={goToMyGithub}>
                <InstagramIcon style={{ fontSize: 34, color: "#e60060" }} />
                <p className="instagramText">
                  صفحه دکتر {selectedItem.name} در فضای مجازی
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="downSection">
          <div className="commentSection">
            <div className="commentTitle">نظرات</div>
            <div className="comments">
              {selectedItem.customers.map((item) => {
                return (
                  <div key={parseInt(item.customerId, 10)} className="comment">
                    <div className="nameStarsWrapper">
                      <div className="commentName">{item.name}</div>
                      <div className="commentStars">
                        {[...Array(5)].map((elem, index) =>
                          index < item.stars ? (
                            <StarIcon
                              key={index}
                              style={{ fontSize: 18, color: "#ffbb00" }}
                            />
                          ) : (
                            <StarOutlineIcon
                              key={index}
                              style={{ fontSize: 18, color: "#ffbb00" }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="commentText">{item.comment}</div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommendersContainer">
            <div className="recommendersTitle">
              کسانیکه دکتر {selectedItem.name} را پیشنهاد می‌کنند
            </div>
            <div className="recommenders">
              <div className="recommenderCard">
                <div className="recommenderImgWrapper">
                  <img
                    className="recommenderImg"
                    alt="Dr. Image"
                    src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div className="recommenderInfo">
                  <div className="recommenderName">رضا یزدانی</div>
                  <div className="recommenderDesc">
                    استاد دانشگاه علوم پزشکی مشهد
                  </div>
                </div>
              </div>
              <div className="recommenderCard">
                <div className="recommenderImgWrapper">
                  <img
                    className="recommenderImg"
                    alt="Dr. Image"
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                </div>
                <div className="recommenderInfo">
                  <div className="recommenderName">رضا یزدانی</div>
                  <div className="recommenderDesc">
                    استاد دانشگاه علوم پزشکی مشهد
                  </div>
                </div>
              </div>
              <div className="recommenderCard">
                <div className="recommenderImgWrapper">
                  <img
                    className="recommenderImg"
                    alt="Dr. Image"
                    src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div className="recommenderInfo">
                  <div className="recommenderName">رضا یزدانی</div>
                  <div className="recommenderDesc">
                    استاد دانشگاه علوم پزشکی مشهد
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
