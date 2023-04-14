import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: #c0c0c0;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: #fff;
    color: #131426;
  }



  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    border: none;
    text-decoration: none;
    cursor: pointer;
  }

`;