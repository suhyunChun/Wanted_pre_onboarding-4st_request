import React from 'react';
import styled from 'styled-components';
import FilterLayout from '../components/SetFilter/FilterLayout';
import InfoListForm from './main/InfoListForm';
import InfoListTemplate from './main/InfoListTemplate';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1130px;
  margin: auto;
  left: 155px;
  top: 110px;
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
      font-size: 23px;
    }
    font-size: 28px;
  }
`;
const LayoutBox = styled.div`
  height: 100vh;
  transition: all 1s;
`;
interface Props {
  isSidebar: boolean;
  handle(a: boolean): void;
}
const RequestBodyContainer = ({ isSidebar, handle }: Props) => {
  return (
    <LayoutBox
      onClick={() => {
        handle(false);
      }}
      style={{
        display: isSidebar ? 'none' : '',
        background: isSidebar ? '#000000' : '',
        opacity: isSidebar ? '0.7' : '1',
      }}
    >
      <Layout style={{ background: isSidebar ? '#000000' : '', opacity: isSidebar ? '0.7' : '1' }}>
        <TextHeader>
          들어온 요청
          <br />
          <span>파트너에게 딱 맞는 요청서를 찾아보세요.</span>
        </TextHeader>
        <FilterLayout />
        <InfoListTemplate>
          <InfoListForm method={[]} material={[]} status={false} />
        </InfoListTemplate>
      </Layout>
    </LayoutBox>
  );
};
export default RequestBodyContainer;
