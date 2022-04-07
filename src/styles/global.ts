import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html { 
    font-sizing: 62.5%
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Open Sans', Arial, sans-serif
  }

  .dragged {
    background: 'blue' !important,
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #dfdfdf;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #c5c5c5;
  }
`;

export default GlobalStyle;
