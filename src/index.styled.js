import { createGlobalStyle } from "styled-components";
import { device } from "./stylesheet/breakpoints";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  background-color: var(--bg-color);
  color: var(--title-color);
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
}

code {
 font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1 {
  color: var(--bg-color);
  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  text-transform: capitalize;

  @media ${device.tabDesk} {
    font-size: 55px;
    line-height: 1.36;
  }
}
h2 {
  color: var(--bg-color);
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.2;
  }

  @media ${device.desktop} {
    font-size: 40px;
    line-height: 1.35;
  }
}
h3 {
  margin-bottom: 8px;
  color: var(--title-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  text-align: center;
  text-transform: capitalize;

  @media ${device.tabDesk} {
    font-size: 32px;
    line-height: 1;
  }
}
p {
  margin-block: 0;
  color: var(--bg-color);
  font-size: 16px;
  text-align: start;

  @media ${device.tabDesk} {
    font-size: 18px;
    line-height: 1.39;
  }
}

`;
