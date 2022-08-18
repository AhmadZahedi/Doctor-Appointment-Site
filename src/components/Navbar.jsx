import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../imgs/LunaFinalWhite.png";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div``;

const Upsection = styled.div`
  background-color: #00748e;
  color: #fff;
  padding: 1.5rem 0;
`;

const Wrapper = styled.div`
  padding-right: 10vw;
  padding-left: 5vw;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const ProfileName = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`;

const MyList = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`;

const MyAppointments = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
`;

const Downsection = styled.div`
  background-color: #2cbfd8;
  color: #fff;
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  padding: 2rem 0;

  cursor: pointer;
`;

const UserPanel = styled.div`
  font-size: 1.6rem;
  color: #88ddff;
  background-color: #00748e;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #88ddff;
  box-shadow: 0 0 1rem #88ddff;
  cursor: pointer;
`;

const DocEnter = styled.div`
  font-size: 1.6rem;
  color: #88ddff;
  background-color: #00748e;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #88ddff;
  box-shadow: 0 0 1rem #88ddff;
  cursor: pointer;
`;

const QA = styled.div`
  font-size: 1.6rem;
  color: #88ddff;
  background-color: #00748e;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #88ddff;
  box-shadow: 0 0 1rem #88ddff;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
`;

const Input = styled.input`
  font-family: "IRANSans", "Vazir", Arial, sans-serif;
  height: 3rem;
  border: none;
  padding: 0 1rem;
  border-radius: 3px;
  :focus {
    outline: 1px solid #00748e;
  }
`;

const Navbar = ({ setSearchInput }) => {
  const handleSearch = (e) => {};

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Upsection>
        <Wrapper>
          {/* <ProfileName onClick={goToUserPanel}>احمد</ProfileName>
          <MyList>لیست من</MyList>
          <MyAppointments>نوبت های من</MyAppointments> */}
        </Wrapper>
      </Upsection>
      <Downsection>
        <Wrapper>
          <Logo src={logo} onClick={goToHome} />
          <UserPanel onClick={handleLogin}>ورود کاربران</UserPanel>
          <DocEnter>ورود پزشکان</DocEnter>
          <QA>پرسش و پاسخ پزشکی</QA>
          <SearchContainer>
            <SearchIcon
              style={{
                color: "gray",
                fontSize: 22,
                margin: 10,
                cursor: "pointer",
              }}
              onClick={handleSearch}
            />
            <Input
              placeholder="جستجو..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </SearchContainer>
        </Wrapper>
      </Downsection>
    </Container>
  );
};

export default Navbar;
