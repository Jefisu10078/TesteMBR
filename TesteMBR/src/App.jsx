import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import "./App.css" 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/atividade" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;