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
  padding: 0.5rem 1rem;
`;

const City = styled.span`
  font-size: 1.6rem;
  color: #999;
`;

const Name = styled.span`
  font-size: 2rem;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row-reverse;
`;

const Specialty = styled.p`
  font-size: 1.6rem;
  margin: 0;
  line-height: 2;
  padding: 0.5rem 1rem;
`;

const LinkButton = styled.button`
  font-family: "IRANSans", "Vazir", Arial, sans-serif;
  font-size: 1.6rem;

  width: fit-content;
  /* height: 3rem; */

  padding: 0.5rem 4rem;
  color: #fff;
  background-color: #00748e;
  border: none;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  transition: all 0.3s ease;

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: inset #00748e 0 0 0 2px;
    color: #00748e;
    background-color: #fff;
  }

  &:active {
    box-shadow: 2px inset #00748e;
    color: #00748e;
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
