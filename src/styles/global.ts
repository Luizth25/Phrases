import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing:border-box;
  font-family: "Roboto", sans-serif
}

body {
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.fontColor};
  `}
}

h1 {
    ${({ theme }) => theme.fontStyles.title}
  }

// @TODO - mover para um componente de imagem
img {
  width: 50px;
  height: 50px; 
}
`;
