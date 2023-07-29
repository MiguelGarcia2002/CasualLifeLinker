import React from "react";
import { Home } from "./pages/Home";
import { Standard } from "./pages/Standard";
import { Commander } from "./pages/Commander";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Testing } from "./pages/Testing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let Component;
  let componentClassName;

  return (
    <div className="flex flex-col items-center w-full bg-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Commander" element={<Commander />} />
          <Route path="/Standard" element={<Standard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
