import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import Lx from '../pages/login/Lx';

const Navigator = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lx />} />
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Navigator