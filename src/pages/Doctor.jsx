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
  let selectedDoctor = {};
  doctorsDetails.map((item) => {
    if (item.id == id) selectedDoctor = item;
  });

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
        <div className="up-section">
          <div className="card-buttons-wrapper">
            <div className="card">
              <div className="img-wrapper">
                <img className="img" src={selectedDoctor.img} />
              </div>
              <div className="info-wrapper">
                <div className="name-wrapper">
                  <div className="name">دکتر {selectedDoctor.name}</div>
                  <VerifiedIcon
                    color="primary"
                    style={{ fontSize: 30, paddingRight: 10 }}
                  />
                </div>
                <div className="city-specialty-wrapper">
                  <div className="specialty">{selectedDoctor.specialty}</div>
                  <div className="city">{selectedDoctor.city}</div>
                </div>
                <div className="params-wrapper">
                  <div className="followers-wrapper">
                    <div className="followers-count">
                      {selectedDoctor.followers} دنبالکننده
                    </div>
                    <PersonOutlineIcon
                      color="primary"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="gmcNum-wrapper">
                    <div className="gmcNum">
                      شماره نظام: {selectedDoctor.gmc}
                    </div>
                    <PolicyIcon color="primary" style={{ fontSize: 20 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons-wrapper">
              <div className="my-list-button">
                <PostAddIcon style={{ color: "#fff", fontSize: 20 }} />
                <p className="my-list-button-text">لیست من</p>
              </div>
              <div
                className="get-appointmetn-button"
                onClick={goToApopintmentPage}
              >
                <EventAvailableIcon style={{ color: "#fff", fontSize: 30 }} />
                <p className="get-appointment-button-text">
                  دریافت نوبت اینترنتی
                </p>
              </div>
            </div>
          </div>
          <div className="further-information">
            <h3 className="further-information-title">
              اطلاعات تکمیلی <hr />
            </h3>
            <div className="further-information-text">
              <div className="university">
                {selectedDoctor.specialty} فارغ التحصیل از دانشگاه
                {` ` + selectedDoctor.uni}
              </div>
              <p className="address">آدرس: {selectedDoctor.address}</p>
              <p className="phone">تلفن تماس :{selectedDoctor.phone}</p>
              <p className="time-text">{selectedDoctor.timeText}</p>
            </div>
            <div className="connections">
              <div className="instagram" onClick={goToMyGithub}>
                <InstagramIcon style={{ fontSize: 34, color: "#e60060" }} />
                <p className="instagram-text">
                  صفحه دکتر {selectedDoctor.name} در فضای مجازی
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-section">
          <div className="comment-section">
            <div className="comment-title">نظرات</div>
            <div className="comments">
              {selectedDoctor.customers.map((item) => {
                return (
                  <div className="comment" key={parseInt(item.customerId, 10)}>
                    <div className="name-stars-wrapper">
                      <div className="comment-name">{item.name}</div>
                      <div className="comment-stars">
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
                    <div className="comment-text">{item.comment}</div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommenders-container">
            <div className="recommenders-title">
              کسانی که دکتر {selectedDoctor.name} را پیشنهاد می‌کنند
            </div>
            <div className="recommenders">
              <div className="recommender-card">
                <div className="recommender-img-wrapper">
                  <img
                    className="recommender-img"
                    alt="Dr. Image"
                    src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div className="recommender-info">
                  <div className="recommender-name">رضا یزدانی</div>
                  <div className="recommender-desc">
                    استاد دانشگاه علوم پزشکی مشهد
                  </div>
                </div>
              </div>
              <div className="recommender-card">
                <div className="recommender-img-wrapper">
                  <img
                    className="recommender-img"
                    alt="Dr. Image"
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  />
                </div>
                <div className="recommender-info">
                  <div className="recommender-name">رضا یزدانی</div>
                  <div className="recommender-desc">
                    استاد دانشگاه علوم پزشکی مشهد
                  </div>
                </div>
              </div>
              <div className="recommender-card">
                <div className="recommender-img-wrapper">
                  <img
                    className="recommender-img"
                    alt="Dr. Image"
                    src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div className="recommender-info">
                  <div className="recommender-name">رضا یزدانی</div>
                  <div className="recommender-desc">
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
