import React, { FC } from 'react';
import { JsxAttributeLike } from 'typescript';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 0px;
  background: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const NavTitle = styled.div`
  height: 20px;
  width: 153px;
  border-radius: 0px;
  background: url('../Image/자산 1@3x 3.png');
  margin-left: 40px;
`;
const SideContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
`;
const CompanyIcon = styled.div`
  height: 15px;
  width: 23px;
  border-radius: 0px;
  background: url('../Image/Vector.png');
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

const Nav: FC = (): JSX.Element => {
  return (
    <NavContainer>
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

export default Nav;
