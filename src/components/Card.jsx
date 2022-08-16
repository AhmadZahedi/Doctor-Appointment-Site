import React from "react";
import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  overflow: hidden;
  flex-flow: row-reverse;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.3;
  overflow: hidden;
`;

const Image = styled.img`
  width: cover;
  height: 100%;
`;

const InfoWrapper = styled.div`
  position: relative;
  flex: 3;
`;

const NameCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

const City = styled.span`
  font-size: 16px;
  color: #999;
`;

const Name = styled.span`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse;
`;

const Specialty = styled.p`
  margin: 0;
  line-height: 2;
  padding: 5px 10px;
  font-size: 12px;
`;

const LinkButton = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 5px 40px;
  color: #fff;
  background-color: #036c9c;
  border-radius: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: 30px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: inset #004f74 0px 0px 0px 2px;
    color: #036c9c;
    background-color: #fff;
  }

  &:active {
    box-shadow: 2px inset #036c9c;
    color: #004f74;
    background-color: #bae7fc;
  }
`;

const Card = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image alt="Dr. image" src={item.img} />
      </ImageWrapper>
      <InfoWrapper>
        <NameCityWrapper>
          <Name>
            <VerifiedIcon
              color="primary"
              style={{ fontSize: "30", paddingRight: "10" }}
            />
            دکتر {item.name}
          </Name>
          <City>{item.city}</City>
        </NameCityWrapper>
        <Specialty>{item.specialty}</Specialty>
        <Link to={`/doctor/${item.id}`} style={{ textDecoration: "none" }}>
          <LinkButton>مشاهده </LinkButton>
        </Link>
      </InfoWrapper>
    </Container>
  );
};

export default Card;
