import React, { useState, useEffect, FC } from 'react';
import type { infoType } from '../../types/components/infolist';
import * as infoListAPI from '../../api/getInforList';
import FilterLayout from '../../components/SetFilter/FilterLayout';
import Container from '../../components/Container';
import SideNav from '../../components/nav/SideNav';
import Nav from '../../components/nav/Nav';

const MainPage: FC = () => {
  const [infoList, setInfoList] = useState<infoType[] | null>(null);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const handle = (a: boolean): void => {
    setIsSidebar(a);
  };

  useEffect(() => {
    async function getInfoList() {
      const result = await infoListAPI.getInfoList();
      const { requests } = result;
      console.log(requests);
      setInfoList(requests);
    }
    getInfoList();
  }, []);

  useEffect(() => {
    console.log(infoList);
  }, [infoList]);

  return (
    <div>
      <Nav isSidebar={isSidebar} handle={handle} />
      <SideNav isSidebar={isSidebar} handle={handle} />
      <Container isSidebar={isSidebar} />
    </div>
  );
};

export default MainPage;
