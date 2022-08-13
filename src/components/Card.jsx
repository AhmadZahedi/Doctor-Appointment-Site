import React from "react";
import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";
import img from "../imgs/DrImage.jpg";

const Container = styled.div`
  display: flex;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
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
  /* background-color: #b3ff00; */
  flex: 3;
`;

const NameCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

const City = styled.span`
  font-size: 8px;
`;

const Name = styled.span``;

const Specialty = styled.p`
  margin: 0;
  line-height: 2;
  padding: 5px 10px;
  text-align: right;
  font-size: 12px;
`;

const Card = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image alt="Dr. image" src={item.img} />
      </ImageWrapper>
      <InfoWrapper>
        <NameCityWrapper>
          <City>{item.city}</City>
          <Name>
            <VerifiedIcon
              color="primary"
              fontSize="20"
              style={{ paddingRight: "10" }}
            />
            {item.name}
          </Name>
        </NameCityWrapper>
        <Specialty>{item.specialty}</Specialty>
      </InfoWrapper>
    </Container>
  );
};

export default Card;
