import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Toggle from './Toggle';

const FilterLayout = () => {
  return (
    <FilterSection>
      <Filter />
      <Toggle />
    </FilterSection>
  );
};

const FilterSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default FilterLayout;
