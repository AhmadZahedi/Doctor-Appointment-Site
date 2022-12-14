import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/LunaFinalWhite.png";
import SearchIcon from "@mui/icons-material/Search";
import "./css/Navbar.css";
import "./css/NavbarQueries.css";

const Navbar = ({ setSearchInput }) => {
  let openSearchInitial;
  if (window.innerWidth <= 544) {
    openSearchInitial = false;
  } else {
    openSearchInitial = true;
  }
  const [navOpen, setNavOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(openSearchInitial);

  const handleSearch = (e) => {
    setOpenSearch((current) => !current);
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const handleMobileNavigation = () => {
    setNavOpen((current) => !current);
  };

  const handleOverlayClick = () => {
    setNavOpen(false);
  };

  const handleScroll = () => {
    setNavOpen(false);
  };

  if (navOpen) {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <div className={navOpen ? "navbar-container nav-open" : "navbar-container"}>
      <div className="upsection">
        <button class="btn-mobile-nav" onClick={handleMobileNavigation}>
          <ion-icon class="icon-mobile-nav" name="menu-outline" />
          <ion-icon class="icon-mobile-nav" name="close-outline" />
        </button>
        {/* <p className="luna-text">luna.ir</p> */}
        <div className="search-container">
          <SearchIcon
            style={{
              color: "gray",
              fontSize: 22,
              margin: 10,
              cursor: "pointer",
            }}
            onClick={handleSearch}
          />
          <input
            type="text"
            className={openSearch ? "input" : "input hidden"}
            placeholder="جستجو..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <img alt="logo image" className="logo" src={logo} onClick={goToHome} />
      </div>
      <div className="downsection">
        <div className="navbar-wrapper">
          <p className="user-panel" onClick={handleLogin}>
            ورود کاربران
          </p>
          <p className="doc-enter">ورود پزشکان</p>
          <p className="QA">پرسش و پاسخ پزشکی</p>
        </div>
      </div>
      <div className="overlay" onClick={handleOverlayClick}></div>
    </div>
  );
};

export default Navbar;
