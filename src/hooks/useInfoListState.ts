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

  const checkSortedInfoList = (currentSort: string[], prevSort: string[], currentSortName: string): void => {
    const currentSelectedSortNum: number = currentSort.length;

    if (currentSelectedSortNum !== 0) {
      let filteredInfoList = sortedInfoList.slice();

      infoList.forEach((info: InfoType) => {
        let isSorted = false;
        for (let i = 0; i < currentSelectedSortNum; i++) {
          if (info[currentSortName].includes(currentSort[i])) isSorted = true;
          else {
            isSorted = false;
            break;
          }
        }

        const currentStoredInfoID = filteredInfoList.map((info) => {
          return info.id;
        });

        if (isSorted && !currentStoredInfoID.includes(info.id)) {
          filteredInfoList.push(info);
        }

        if (!isSorted && currentStoredInfoID.includes(info.id)) {
          filteredInfoList = filteredInfoList.filter((storedInfo) => storedInfo.id !== info.id);
        }
      });

      setSortedInfoList(filteredInfoList);
    } else if (prevSort.length === 0) setSortedInfoList([]);
  };

  useEffect(() => {
    checkSortedInfoList(method, material, 'method');
  }, [method]);

  useEffect(() => {
    checkSortedInfoList(material, method, 'material');
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
