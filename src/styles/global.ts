import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    list-style-type: none;
    box-sizing: border-box;
    border: none;

    font-family: ${({theme}) => theme.FONTS.PRIMARY};
    color: ${({theme}) => theme.COLORS.TEXT};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  button {
    cursor: pointer;
  }
`