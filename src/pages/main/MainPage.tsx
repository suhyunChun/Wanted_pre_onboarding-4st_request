import React, { FC } from 'react';
import InfoListTemplate from './InfoListTemplate';
import InfoListForm from './InfoListForm';

const MainPage: FC = () => {
  return (
    <InfoListTemplate>
      <InfoListForm method={[]} material={[]} status={false} />
    </InfoListTemplate>
  );
};

export default MainPage;
