import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';

const Navigator = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Navigator