import React, { useState, useEffect, FC } from 'react';
import type { infoType } from '../../types/components/infolist';
import * as infoListAPI from '../../api/getInforList';

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

  return <div />;
};

export default MainPage;
