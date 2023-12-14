import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "/src/pages/home";
import Catalog from "/src/pages/catalog";


function App() {

  return (
    <>
    <>
    <Routes>
       <Route path="/" element={<Home />} />  
       <Route path="/Catalog" element={<Catalog/>} />  
    </Routes>
    </>
    </>
  )
}

export default App
