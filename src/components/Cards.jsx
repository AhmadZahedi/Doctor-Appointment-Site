import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { doctorsDetails } from "../data";
import { useState } from "react";

const Wrapper = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 10px;
  padding-top: 30px;
`;

const Error = styled.span``;

const Cards = (city) => {
  let selectedItems = [];
  doctorsDetails.map((item) => {
    if (item.city === city.city) {
      selectedItems.push(item);
    }
    // setSelectedDoctors(selectedItems);
  });

  return (
    <Wrapper>
      {city
        ? selectedItems.map((item) => <Card item={item} key={item.id} />)
        : doctorsDetails.map((item) => <Card item={item} key={item.id} />)}
    </Wrapper>
  );
};

export default Cards;
