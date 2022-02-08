import React from 'react';
import styled from 'styled-components';

interface Props {
  isSidebar: boolean;
  handle(a: boolean): void;
}

const Nav = ({ isSidebar, handle }: Props) => {
  return (
    <NavContainer style={{ background: isSidebar ? '#000000' : '', opacity: isSidebar ? '0.7' : '1' }}>
      <BlinkBox
        onClick={() => {
          handle(false);
        }}
      />
      <MenuIcon
        onClick={() => {
          handle(true);
        }}
      />
      <NavTitle />
      <SideContainer>
        <CompanyIcon />
        <Company>A 가공 업체</Company>
        <Divider />
        <Logout>로그아웃</Logout>
      </SideContainer>
    </NavContainer>
  );
};
const NavContainer = styled.div<{ isSidebar?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 0px;
  background: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transition: all 1s;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;
const NavTitle = styled.div`
  height: 20px;
  width: 153px;
  border-radius: 0px;
  background: url('../Image/icon_navtitle.png');
  margin-left: 40px;
  cursor: pointer;
`;
const SideContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;
const CompanyIcon = styled.div`
  height: 15px;
  width: 23px;
  border-radius: 0px;
  background: url('../Image/icon_companyW.png');
  margin-right: 12px;
`;
const Company = styled.div`
  height: 20px;
  width: 110px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: inline;
  color: #ffffff;
`;
const Divider = styled.div`
  height: 16px;
  width: 1px;
  border: 2px solid #ffffff;
  margin: 0px 32px;
`;
const Logout = styled.div`
  width: 50%;
  height: 20px;
  font-family: Noto Sans KR Regular;
  font-size: 14px;
  color: #ffffff;
`;
const MenuIcon = styled.div`
  width: 30px;
  height: 50px;
  top: 10px;
  margin-left: 20px;
  transition: all 2s;
  background: url('../Image/icon_menu.png');
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;
const BlinkBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 20vw;
  height: 100vh;
`;

export default Nav;
