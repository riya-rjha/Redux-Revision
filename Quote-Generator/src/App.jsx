import React, { useState, useEffect } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.jsx";
import AddQuote from "./Components/AddQuote.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/add" element={<AddQuote />}></Route>
    </Routes>
  );
};

export default App;
