import { createGlobalStyle } from "styled-components";
import { colors, fontConfig } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontConfig.font.body}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-size: ${fontConfig.fontSize.body};
    color:${colors.blackParagraph};
    background: ${colors.background};
  }
  a {
    text-decoration:none;
  }
  h1, h2 {
    color:${colors.blackTitle};
    font-family: ${fontConfig.font.headers};
  }
  h1 {
    font-size: ${fontConfig.fontSize.h1};
  }
  h2 {
    font-size: ${fontConfig.fontSize.h2};
  }
  h3 {
    font-size: ${fontConfig.fontSize.h3};
  }
  h4 {
    font-size: ${fontConfig.fontSize.caption}
  }
  button {
    font-size: ${fontConfig.fontSize.button};
   
  }
`;

export default GlobalStyles;