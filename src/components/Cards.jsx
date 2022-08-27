import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { doctorsDetails } from "../data";

const Wrapper = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 20rem;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 75em) {
    flex: 4;
    margin-top: 1rem;
  }

  @media (max-width: 46em) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Error = styled.span``;

const Cards = ({ city, cat, searchInput }) => {
  let selectedItems = [];

  doctorsDetails.map((item) => {
    if (city && !cat && !searchInput) {
      if (item.city === city) {
        selectedItems.push(item);
      }
    } else if (city && !cat && searchInput) {
      if (item.city === city && item.name.includes(searchInput)) {
        selectedItems.push(item);
      }
    } else if (!city && cat && !searchInput) {
      if (item.specialty === cat) {
        selectedItems.push(item);
      }
    } else if (!city && cat && searchInput) {
      if (item.specialty === cat && item.name.includes(searchInput)) {
        selectedItems.push(item);
      }
    } else if (city && cat && !searchInput) {
      if (item.city === city && item.specialty === cat) {
        selectedItems.push(item);
      }
    } else if (city && cat && searchInput) {
      if (
        item.city === city &&
        item.specialty === cat &&
        item.name.includes(searchInput)
      ) {
        selectedItems.push(item);
      }
    } else if (!city && !cat && searchInput) {
      if (item.name.includes(searchInput)) {
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
