import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.headerBgColor};

  h1 {
    ${({ theme }) => theme.fontStyles.title}
  }
`;
