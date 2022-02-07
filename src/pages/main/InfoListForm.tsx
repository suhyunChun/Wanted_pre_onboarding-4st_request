import React, { FC } from 'react';
import styled from 'styled-components';
import CardBoard from './CardBoard';
import useInfoListState from '../../hooks/useInfoListState';
import type { OptionalProps } from '../../types/props/optionalProps';
import type { InfoType } from '../../types/components/infolist';

const InfoListForm: FC<OptionalProps> = ({ method, material, status }) => {
  const { sortedInfoList } = useInfoListState({ method, material, status });

  const checkEmptyList = (): boolean => {
    let isEmpty = true;

    const currentInfoListNum = sortedInfoList.length;

    if (currentInfoListNum === 0) isEmpty = true;

    return isEmpty;
  };

  return (
    <Container>
      {checkEmptyList() ? (
        <GuideLine>
          <FrontInformation>조건에 맞는 견적 요청이 없습니다.</FrontInformation>
        </GuideLine>
      ) : (
        sortedInfoList.length !== 0 &&
        sortedInfoList.map((info: InfoType) => {
          return <CardBoard key={info.id} {...info} />;
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1130px;
`;

const GuideLine = styled.div`
  display: flex;
  justify-content: center;
  padding: 38px 0;
  text-align: center;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
`;

const FrontInformation = styled.div`
  color: #939fa5;
  font-size: 14px;
  line-height: 20px;
`;

export default InfoListForm;
