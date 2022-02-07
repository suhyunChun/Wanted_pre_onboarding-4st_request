import React, { FC } from 'react';
import styled from 'styled-components';

const InfoListTemplate: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
`;

export default InfoListTemplate;
