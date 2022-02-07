import React, { FC } from 'react';
import styled from 'styled-components';
import CardBoard from './CardBoard';
import useInfoListState from '../../hooks/useInfoListState';
import type { OptionalProps } from '../../types/props/optionalProps';
import type { InfoType } from '../../types/components/infolist';

const InfoListForm: FC<OptionalProps> = ({ method, material, status }) => {
  const { sortedInfoList } = useInfoListState({ method, material, status });

  return (
    <Container>
      {sortedInfoList.length !== 0 &&
        sortedInfoList.map((info: InfoType) => {
          return <CardBoard key={info.id} {...info} />;
        })}
    </Container>
  );
};

const Container = styled.div``;

export default InfoListForm;
