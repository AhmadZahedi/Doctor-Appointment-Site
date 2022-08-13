import React, { useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  /* position: relative; */
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;
  padding-right: 100px;
  padding-left: 100px;
`;

const Home = () => {
  const [city, setCity] = useState("تهران");

  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar setCity={setCity} />
        <Cards city={city} />
      </Container>
    </div>
  );
};

export default Home;
