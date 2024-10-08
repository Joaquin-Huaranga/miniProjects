import { createGlobalStyle, css } from "styled-components";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, sans-serif;
  }

  body {
    font-size: 15px;
    background-color: gray;
  }
`;

export const GlobalStyle = createGlobalStyle`${global}`;
