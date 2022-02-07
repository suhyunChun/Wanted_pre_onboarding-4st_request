import React, { useState, useEffect, FC } from 'react';
import type { infoType } from '../../types/components/infolist';
import * as infoListAPI from '../../api/getInforList';
import FilterLayout from '../../components/SetFilter/FilterLayout';
import Container from '../../components/Container';

const MainPage: FC = () => {
  const [infoList, setInfoList] = useState<infoType[] | null>(null);

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
      <Container />
    </div>
  );
};

export default MainPage;
