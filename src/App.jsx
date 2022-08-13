import React from "react";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
