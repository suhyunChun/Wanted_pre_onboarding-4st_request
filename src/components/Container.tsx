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
  left: 155px;
  top: 110px;
  overflow: hidden;
  @media (max-width: 600px) {
    left: 25px;
    width: 90%;
    margin-left: 24px;
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
  margin-top: 40px;
  @media (max-width: 600px) {
    span {
      font-size: 24.1px;
    }
    font-size: 30px;
  }
`;
const LayoutBox = styled.div`
  width: 100vw;
  height: 100vh;
  transition: all 2s;
`;
interface Props {
  isSidebar: boolean;
}
const Container = ({ isSidebar }: Props) => {
  return (
    <LayoutBox style={{ background: isSidebar ? '#000000' : '', opacity: isSidebar ? '0.7' : '1' }}>
      <Layout>
        <TextHeader>
          들어온 요청
          <br />
          <span>파트너에게 딱 맞는 요청서를 찾아보세요.</span>
        </TextHeader>
        <FilterLayout />
      </Layout>
    </LayoutBox>

  );
};
export default Container;
