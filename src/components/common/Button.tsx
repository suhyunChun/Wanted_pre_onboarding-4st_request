import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import type { ButtonType } from '../../types/styles/ButtonType';

const Button: FC<ButtonType> = ({ sort, children }) => {
  return <StyledButton sort={sort}>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonType>`
  padding: 0.5rem 0.6rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  cursor: pointer;

  ${({ sort }) =>
    sort === 'seeButton' &&
    css`
      margin-right: 12px;
      border: none;
      background-color: #2196f3;
      color: #ffffff;
    `}

  ${({ sort }) =>
    sort === 'chatButton' &&
    css`
      border: 1px solid #2196f3;
      background-color: #ffffff;
      color: #2196f3;
    `}
`;

export default Button;
