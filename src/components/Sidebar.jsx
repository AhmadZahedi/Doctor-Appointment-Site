import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { doctorsDetails } from "../data";

const Wrapper = styled.div`
  width: 25rem;
  height: 100rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 3rem;
`;

const Select = styled.select`
  font-family: "IRANSans", "Vazir", Arial, sans-serif;
  color: #555;
  font-size: 1.6rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  outline-style: none;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  :focus {
    border: 2px solid #00748e;
  }

  option {
    color: #333;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategorieItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #000;
  }

  &:active {
    color: #2cbfd8;
  }
`;

const CategorieItemText = styled.div`
  font-size: 1.8rem;
`;

const Sidebar = ({ setCity, setCat }) => {
  const handleFilters = (e) => {
    setCity(e.target.value);
  };

  const handleClick = (e) => {
    setCat(e.target.innerText);
  };

  return (
    <Wrapper>
      <Select name="city" defaultValue="شهر..." onChange={handleFilters}>
        <option disabled>شهر...</option>
        <option>تهران</option>
        <option>مشهد</option>
        <option>اصفهان</option>
        <option>شیراز</option>
      </Select>

      <Categories>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص زنان و زایمان
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>دندانپزشک</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص عفونی
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص داخلی
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص پوست و مو
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص قلب و عروق
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص گوش و حلق و بینی
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص مغز و اعصاب
          </CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText onClick={handleClick}>
            متخصص ارتوپد
          </CategorieItemText>
        </CategorieItem>
      </Categories>
    </Wrapper>
  );
};

export default Sidebar;
