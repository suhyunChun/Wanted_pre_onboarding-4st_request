import React, { FC, useState } from 'react';

import Nav from '../../components/nav/Nav';
import SideNav from '../../components/nav/SideNav';
import Container from '../../components/Container';

const MainPage: FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const handle = (a: boolean): void => {
    setIsSidebar(a);
  };
  return (
    <>
      <Nav isSidebar={isSidebar} handle={handle} />
      <SideNav isSidebar={isSidebar} handle={handle} />
      <Container isSidebar={isSidebar} handle={handle} />
    </>
  );
};

export default MainPage;
