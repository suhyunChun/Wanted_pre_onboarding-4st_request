import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Container from './components/Container';
import MainPage from './pages/main/MainPage';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
