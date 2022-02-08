import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Nav from '../src/components/nav/Nav';
import SideNav from '../src/components/nav/SideNav';

const Router: FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const handle = (a: boolean): void => {
    setIsSidebar(a);
  };
  return (
    <BrowserRouter>
      <Nav isSidebar={isSidebar} handle={handle} />
      <SideNav isSidebar={isSidebar} handle={handle} />
      <Routes>
        <Route path="/" element={<MainPage isSidebar={isSidebar} handle={handle} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
