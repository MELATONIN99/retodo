import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f6f9f0;
    margin-bottom: 100px;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
