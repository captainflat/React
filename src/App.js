import React, {useEffect, useMemo, useRef, useState} from 'react';
import { BrowserRouter, createBrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { SwitchTransition } from 'react-transition-group';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';
import AppRouter from './components/AppRouter';


function App() {

 return (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
 )
 }

export default App;
