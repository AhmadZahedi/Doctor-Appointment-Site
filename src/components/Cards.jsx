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

const Cards = ({ city, cat }) => {
  let selectedItems = [];
  doctorsDetails.map((item) => {
    if (city && !cat) {
      if (item.city === city) {
        selectedItems.push(item);
      }
    } else if (!city && cat) {
      if (item.specialty === cat) {
        selectedItems.push(item);
      }
    } else if (city && cat) {
      if (item.city === city && item.specialty === cat) {
        selectedItems.push(item);
      }
    } else {
      selectedItems.push(item);
    }
  });

  return (
    <Wrapper>
      {selectedItems.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Wrapper>
  );
};

export default Cards;
