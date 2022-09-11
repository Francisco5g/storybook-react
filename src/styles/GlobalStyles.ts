import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body, html {
    font-family: "Inter", sans-serif;
  }
`;
