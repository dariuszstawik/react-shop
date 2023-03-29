import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
  }

  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
    /* font-family: 'Cormorant',serif; */
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  h1, h2, h3 {
    font-weight: 400;
  }

  p {
    font-weight: 300;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

`;
