import React, { FC } from 'react';
import RequestBodyContainer from '../RequestBodyContainer';

interface Props {
  isSidebar: boolean;
  handle(a: boolean): void;
}
const MainPage = ({ isSidebar, handle }: Props) => {
  return <RequestBodyContainer isSidebar={isSidebar} handle={handle} />;
};

export default MainPage;
