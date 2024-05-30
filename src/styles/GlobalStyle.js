import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // border: solid 1px white
    transition: background-color 0.5s;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--bg-1);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--text-1);
    .scroll-content {
      background-color: var(--bg-1);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--bg-2);
      .scrollbar-thumb-y {
        background: var(--text-1);
      }
    }
  }
`;
export default GlobalStyles;
