import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { doctorsDetails } from "../data";

const Wrapper = styled.div`
  width: 250px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Select = styled.select`
  font-family: "IRANSans", "Vazir", Arial, sans-serif;
  font-size: 16px;
  border: 2px solid #dddddd;
  border-radius: 8px;
  outline-style: none;
  padding: 15px 15px;
  margin: 30px 0 15px 0;

  :focus {
    border: 2px solid teal;
  }

  option {
    color: #333;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CategorieItem = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const CategorieItemText = styled.div`
  font-size: 18px;
  text-transform: lowercase;
`;

const Sidebar = ({ setCity, setCat }) => {
  const handleFilters = (e) => {
    const value = e.target.value;
    const filterName = e.target.name;
    setCity(value);
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
