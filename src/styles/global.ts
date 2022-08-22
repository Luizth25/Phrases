import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
  font-family: "Roboto", sans-serif
}
body {
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroud};
    color: ${theme.colors.fontColor};
  `}
}

img {
  width: 50px;
  height: 50px; 
}
`;
