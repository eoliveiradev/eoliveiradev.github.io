import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
    border: none;

    -webkit-font-smoothing: antialiased;
    font-family: ${({theme}) => theme.FONTS.PRIMARY};
    color: ${({theme}) => theme.COLORS.TEXT};

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.NEUTRAL};

      transition: 0.2s;

      &:hover {
        background: #b9b9c6;
      }
    }

    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  button {
    cursor: pointer;
  }
`