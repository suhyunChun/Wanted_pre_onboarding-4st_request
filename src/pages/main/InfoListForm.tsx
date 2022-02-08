import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import CardBoard from './CardBoard';
import useInfoListState from '../../hooks/useInfoListState';
import type { OptionalProps } from '../../types/props/optionalProps';
import type { InfoType } from '../../types/components/infolist';
import type { ContainerType } from '../../types/styles/infoListForm/ContainerType';

const InfoListForm: FC<OptionalProps> = ({ method, material, status }) => {
  const { sortedInfoList, isEmpty } = useInfoListState({ method, material, status });
  console.log(sortedInfoList);
  return (
    <Container isEmpty={isEmpty}>
      {isEmpty ? (
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

const Container = styled.div<ContainerType>`
  max-width: 1130px;

  ${({ isEmpty }) =>
    !isEmpty &&
    css`
      display: flex;
      justify-content: space-evenly;
      justi
      flex-wrap: wrap;
    `}
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
