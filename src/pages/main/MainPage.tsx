import React, { useState, useEffect, FC } from 'react';
import type { infoType } from '../../types/components/infolist';
import * as infoListAPI from '../../api/getInforList';
import Container from '../../components/Container';

const MainPage: FC = () => {
  const [infoList, setInfoList] = useState<infoType[] | null>(null);

  useEffect(() => {
    async function getInfoList() {
      const result = await infoListAPI.getInfoList();
      const { requests } = result;
      setInfoList(requests);
    }
    getInfoList();
  }, []);

  return (
    <div>
      <Container />
    </div>
  );
};

export default MainPage;
