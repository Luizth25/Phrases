import styled, { css } from "styled-components";

export const Phrase = styled.p`
  ${({ theme }) => css`
    background-color: ${({ theme }) => theme.colors.componentColor};
    ${theme.fontStyles.paragraph}
    width: 50%;
    height: 50%;
    border-radius: 5px;
    text-align: center;
  `}
`;

export const EventButton = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
