import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // border: solid 1px white
  }
  :root{
    // --dark-bg: #262626;
    // --gray-1: #BCB4B4;
    // --deep-dark: #1E1E1E;
    // --gray-2: #363636;
    // --white : white;
    // --black: black;

    --dark-bg: #0F1C2E;
    --gray-1: #acc2ef;
    --deep-dark: #1f2b3e;
    --gray-2: #363636;
    --white : #e0e0e0;
    --black: black;

    
    --primary-100:#1F3A5F;
    --primary-200:#4d648d;
    --primary-300:#acc2ef;
    --accent-100:#3D5A80;
    --accent-200:#cee8ff;
    --text-100:#FFFFFF;
    --text-200:#e0e0e0;
    --bg-100:#0F1C2E;
    --bg-200:#1f2b3e;
    --bg-300:#374357;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
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
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
