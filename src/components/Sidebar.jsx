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
  text-align: right;
  border: 2px solid #dddddd;
  border-radius: 8px;
  outline-style: none;
  scroll-behavior: smooth;
  padding: 15px 5px;
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
  flex-direction: row-reverse;
  cursor: pointer;
`;

const CategorieItemText = styled.div`
  font-size: 18px;
  text-align: right;
  text-transform: lowercase;
`;

const Sidebar = ({ setCity }) => {
  const handleFilters = (e) => {
    const value = e.target.value;
    const filterName = e.target.name;
    setCity(value);
  };

  return (
    <Wrapper>
      <Select name="city" defaultValue="تهران" onChange={handleFilters}>
        <option>تهران</option>
        <option>مشهد</option>
        <option>اصفهان</option>
        <option>شیراز</option>
      </Select>

      <Categories>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص زنان و زایمان</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>دندانپزشک</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص عفونی</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص داخلی</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص پوست و مو</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص قلب و عروق</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص گوش و حلق و بینی</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص مغز و اعصاب</CategorieItemText>
        </CategorieItem>
        <CategorieItem>
          <KeyboardArrowLeftIcon />
          <CategorieItemText>متخصص ارتوپد</CategorieItemText>
        </CategorieItem>
      </Categories>
    </Wrapper>
  );
};

export default Sidebar;
