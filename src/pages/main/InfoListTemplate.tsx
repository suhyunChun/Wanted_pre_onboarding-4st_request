import React, { FC } from 'react';
import styled from 'styled-components';

const InfoListTemplate: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1130px;
  margin: 30px auto;
  @media (min-width: 600px) {
    min-width: 1130px;
  }
`;

export default InfoListTemplate;
