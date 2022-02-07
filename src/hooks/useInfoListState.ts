import React, { useState, useEffect } from 'react';
import type { InfoType } from '../types/components/infolist';
import type { OptionalProps } from '../types/props/optionalProps';
import * as infoListAPI from '../api/getInforList';

const useInfoListState = ({ method, material, status }: OptionalProps) => {
  const [infoList, setInfoList] = useState<InfoType[]>([]);
  //   const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([
  //     {
  //       id: 1,
  //       title: '자동차 시품 제작',
  //       client: 'A 고객사',
  //       due: '2020.12.14',
  //       count: 2,
  //       amount: 100,
  //       method: ['밀링', '선반'],
  //       material: ['알루미늄'],
  //       status: '대기중',
  //     },
  //   ]);
  const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result: InfoType[] = await infoListAPI.getInfoList();
      setInfoList(result);
    };
    getData();
  }, []);

  const checkSortedInfoList = (currentSort: string[], currentSortName: string): void => {
    const currentSelectedSortNum: number = currentSort.length;
    if (currentSelectedSortNum !== 0) {
      const targetInfoList: InfoType[] = sortedInfoList.length === 0 ? infoList : sortedInfoList;
      const filteredInfoList = targetInfoList.filter((info: InfoType) => {
        let isSorted = false;
        for (let i = 0; i < currentSelectedSortNum; i++) {
          if (info[currentSortName].includes(currentSort[i])) isSorted = true;
        }
        return isSorted;
      });
      setSortedInfoList(filteredInfoList);
    }
  };

  useEffect(() => {
    checkSortedInfoList(method, 'method');
  }, [method]);

  useEffect(() => {
    checkSortedInfoList(material, 'material');
  }, [material]);

  useEffect(() => {
    if (status) {
      const targetInfoList: InfoType[] = sortedInfoList.length === 0 ? infoList : sortedInfoList;
      const filteredInfoList: InfoType[] = targetInfoList.filter((info: InfoType) => info.status);
      setSortedInfoList(filteredInfoList);
    }
  }, [status]);

  return { sortedInfoList };
};

export default useInfoListState;
