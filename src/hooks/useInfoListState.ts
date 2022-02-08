import React, { useState, useEffect } from 'react';
import type { InfoType } from '../types/components/infolist';
import type { OptionalProps } from '../types/props/optionalProps';
import * as infoListAPI from '../api/getInforList';

const useInfoListState = ({ method, material, status }: OptionalProps) => {
  const [infoList, setInfoList] = useState<InfoType[]>([]);
  const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([
    {
      id: 1,
      title: '자동차 시품 제작',
      client: 'A 고객사',
      due: '2020.12.14',
      count: 2,
      amount: 100,
      method: ['밀링', '선반'],
      material: ['알루미늄'],
      status: '대기중',
    },
    {
      id: 2,
      title: '비행기 시제품 제작',
      client: 'B 고객사',
      due: '2020.12.13',
      count: 2,
      amount: 100,
      method: ['선반'],
      material: ['탄소강', '강철'],
      status: '상담중',
    },
    {
      id: 3,
      title: '기차 시제품 제작',
      client: 'C 고객사',
      due: '2020.12.12',
      count: 1,
      amount: 20,
      method: ['선반'],
      material: ['구리'],
      status: '대기중',
    },
    {
      id: 4,
      title: '자전거 시제품 제작',
      client: 'D 고객사',
      due: '2020.12.11',
      count: 1,
      amount: 45,
      method: ['선반'],
      material: ['스테인리스강'],
      status: '대기중',
    },
    {
      id: 5,
      title: '헬리콥터 시제품 제작',
      client: 'E 업체',
      due: '2020.12.10',
      count: 2,
      amount: 2,
      method: ['밀링'],
      material: ['알루미늄', '탄소강'],
      status: '대기중',
    },
    {
      id: 5,
      title: '헬리콥터 시제품 제작',
      client: 'E 업체',
      due: '2020.12.10',
      count: 2,
      amount: 2,
      method: ['밀링'],
      material: ['알루미늄', '탄소강'],
      status: '대기중',
    },
  ]);
  /*
   {
      id: 1,
      title: '자동차 시품 제작',
      client: 'A 고객사',
      due: '2020.12.14',
      count: 2,
      amount: 100,
      method: ['밀링', '선반'],
      material: ['알루미늄'],
      status: '대기중',
    },
    {
      id: 2,
      title: '비행기 시제품 제작',
      client: 'B 고객사',
      due: '2020.12.13',
      count: 2,
      amount: 100,
      method: ['선반'],
      material: ['탄소강', '강철'],
      status: '상담중',
    },
    {
      id: 3,
      title: '기차 시제품 제작',
      client: 'C 고객사',
      due: '2020.12.12',
      count: 1,
      amount: 20,
      method: ['선반'],
      material: ['구리'],
      status: '대기중',
    },
    {
      id: 4,
      title: '자전거 시제품 제작',
      client: 'D 고객사',
      due: '2020.12.11',
      count: 1,
      amount: 45,
      method: ['선반'],
      material: ['스테인리스강'],
      status: '대기중',
    },
    {
      id: 5,
      title: '헬리콥터 시제품 제작',
      client: 'E 업체',
      due: '2020.12.10',
      count: 2,
      amount: 2,
      method: ['밀링'],
      material: ['알루미늄', '탄소강'],
      status: '대기중',
    },
    {
      id: 5,
      title: '헬리콥터 시제품 제작',
      client: 'E 업체',
      due: '2020.12.10',
      count: 2,
      amount: 2,
      method: ['밀링'],
      material: ['알루미늄', '탄소강'],
      status: '대기중',
    },
  */
  //   const [sortedInfoList, setSortedInfoList] = useState<InfoType[]>([]);
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
    checkEmptyList();
  }, [method]);

  useEffect(() => {
    checkSortedInfoList(material, 'material');
    checkEmptyList();
  }, [material]);

  useEffect(() => {
    if (status) {
      const targetInfoList: InfoType[] = sortedInfoList.length === 0 ? infoList : sortedInfoList;
      const filteredInfoList: InfoType[] = targetInfoList.filter((info: InfoType) => info.status);
      setSortedInfoList(filteredInfoList);
    }
    checkEmptyList();
  }, [status]);

  const checkEmptyList = () => {
    const currentInfoListNum = sortedInfoList.length;

    if (currentInfoListNum === 0) setIsEmpty(true);
    else setIsEmpty(false);
  };

  return { sortedInfoList, isEmpty };
};

export default useInfoListState;
