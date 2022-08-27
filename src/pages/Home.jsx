import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import "./css/queries.css";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 5rem 10rem;

  @media (max-width: 75em) {
    gap: 1rem;
    padding-top: 2.5rem;
  }

  @media (max-width: 59em) {
    flex-direction: column;
  }

  @media (max-width: 40em) {
    padding: 0 5rem;
  }

  @media (max-width: 34em) {
    padding: 0 2.5rem;
  }
`;

const Home = () => {
  const [city, setCity] = useState(null);
  const [cat, setCat] = useState(null);
  const [searchInput, setSearchInput] = useState(null);

  return (
    <div>
      <Navbar setSearchInput={setSearchInput} />
      <Container>
        <Sidebar setCity={setCity} setCat={setCat} />
        <Cards city={city} cat={cat} searchInput={searchInput} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
