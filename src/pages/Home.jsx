import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row-reverse;
  padding: 0 100px;
`;

const Home = () => {
  const [city, setCity] = useState(null);
  const [cat, setCat] = useState(null);

  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar setCity={setCity} setCat={setCat} />
        <Cards city={city} cat={cat} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
