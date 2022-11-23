import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import classes from "./Body.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Searcharea from "./components/Searcharea";
import Footer from "./components/Footer";
import Companydetails from "./components/Companydetails";
import Privacypolicy from "./components/Privacypolicy";
import Termsservice from "./components/Termsservice";
import MainApp from './MainApp';
import Aboutus from './components/Aboutus';
import Login2 from './components/Login2';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Companydetails" element={<Companydetails />} />{" "}
          <Route path="/Privacypolicy" element={<Privacypolicy />} />{" "}
          <Route path="/Termsservice" element={<Termsservice />} />
          <Route path="/Login" element={<Login2 />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App
 
  
 