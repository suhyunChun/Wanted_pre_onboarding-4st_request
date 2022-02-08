import React, { useState, useEffect } from 'react';
import type { InfoType } from '../types/components/infolist';
import type { OptionalProps } from '../types/props/optionalProps';
import * as infoListAPI from '../api/getInforList';

const useInfoListState = ({ method, material, status }: OptionalProps) => {
  const [infoList, setInfoList] = useState<InfoType[]>([]);
  const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([]);

  const [isEmpty, setIsEmpty] = useState<boolean>(true);

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
      console.log(currentSort);
      // const targetInfoList: InfoType[] = sortedInfoList.length === 0 ? infoList : sortedInfoList;
      const filteredInfoList = infoList.filter((info: InfoType) => {
        let isSorted = false;
        for (let i = 0; i < currentSelectedSortNum; i++) {
          if (info[currentSortName].includes(currentSort[i])) isSorted = true;
          else isSorted = false;
        }
        return isSorted;
      });
      setSortedInfoList(filteredInfoList);
    } else setSortedInfoList([]);
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

  useEffect(() => {
    const currentInfoListNum = sortedInfoList.length;

    if (currentInfoListNum === 0) setIsEmpty(true);
    else setIsEmpty(false);
  }, [sortedInfoList]);

  return { sortedInfoList, isEmpty };
};

export default useInfoListState;
