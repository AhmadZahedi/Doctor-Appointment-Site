import React from "react";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Appointment from "./pages/Appointment";
import ScrollUp from "./components/ScrollUp";
import MyGithubAccount from "./components/AuthorGithubAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<Doctor />} />
        <Route path="/MyGithubAccount" element={<MyGithubAccount />} />
        <Route path="/doctor/:id/schedule" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
