import React, { FC } from 'react';
import styled from 'styled-components';

const Button: FC = () => {
  return <StyledButton />;
};

const StyledButton = styled.button`
border: none;
border-radius: 16px;
font-size: 1rem;
padding: 0.25rem 1rem;
background: #fff
color: #fff;
outline: none;
cursor: pointer;
`;

export default Button;
