import React, { useState, useEffect } from 'react';
import type { infoType } from '../../types/components/infolist';
import * as infoListAPI from '../../api/getInforList';

const MainPage: React.FC = () => {
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

  return <div></div>;
};

export default MainPage;
