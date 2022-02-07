import React, { FC } from 'react';
import styled from 'styled-components';
import FilterLayout from './SetFilter/FilterLayout';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 80%;
  height: 600px;
  margin-left: 150px;
  margin-top: 40px;
  left: 155px;
  top: 110px;
  overflow: hidden;
  @media (max-width: 600px) {
    left: 25px;
    width: 90%;
    margin-left: 24px;
    margin-top: 40px;
  }
`;

const TextHeader = styled.div`
  span {
    font-size: 16px;
    font-weight: 500;
  }
  font-weight: 800;
  font-family: Noto Sans KR Regular;
  color: #323d45;
  font-size: 20px;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    span {
      font-size: 24.1px;
    }
    font-size: 30px;
  }
`;
const Container: FC = () => {
  return (
    <Layout>
      <TextHeader>
        들어온 요청
        <br />
        <span>파트너에게 딱 맞는 요청서를 찾아보세요</span>
        <FilterLayout />
      </TextHeader>
      <FilterLayout />
    </Layout>
  );
};
export default Container;
