import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Manrope, sans-serif;
  }

  section {
    background-color: ${theme.colors.primaryBg};
  }

  ul {
    list-style: none;
  }

  a {
    color: ${theme.colors.font};
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`