import React from "react";
import styled from "styled-components";
import logo from "../imgs/LunaFinalWhite.png";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div``;

const Upsection = styled.div`
  width: 100vw;
  background-color: #00748e;
  color: #fff;
`;

const Wrapper = styled.div`
  padding-right: 10vw;
  padding-left: 5vw;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 30px;
`;

const ProfileName = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const MyList = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const MyAppointments = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const Downsection = styled.div`
  width: 100vw;
  background-color: #2cbfd8;
  color: #fff;
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  padding: 20px 0;
`;

const UserPanel = styled.div`
  color: #88ddff;
  background-color: #00748e;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #70eaff;
  box-shadow: 0px 0px 10px #70eaff;
  cursor: pointer;
`;

const DocInter = styled.div`
  color: #88ddff;
  background-color: #00748e;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #70eaff;
  box-shadow: 0px 0px 10px #70eaff;
  cursor: pointer;
`;

const QA = styled.div`
  color: #88ddff;
  background-color: #00748e;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #70eaff;
  box-shadow: 0px 0px 10px #70eaff;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
`;

const Input = styled.input`
  text-align: right;
  height: 30px;
  border: none;
  padding: 0 10px;
  border-radius: 3px;
  :focus {
    outline: 1px solid teal;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Upsection>
        <Wrapper>
          <ProfileName>احمد</ProfileName>
          <MyList>لیست من</MyList>
          <MyAppointments>نوبت های من</MyAppointments>
        </Wrapper>
      </Upsection>
      <Downsection>
        <Wrapper>
          <Logo src={logo} />
          <UserPanel>پنل کاربری</UserPanel>
          <DocInter>ورود پزشکان</DocInter>
          <QA>پرسش و پاسخ پزشکی</QA>
          <SearchContainer>
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            <Input placeholder="...جستجو" />
          </SearchContainer>
        </Wrapper>
      </Downsection>
    </Container>
  );
};

export default Navbar;
