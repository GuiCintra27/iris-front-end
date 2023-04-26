import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    --purple: #754e92;
    --pink: #ff408e;
    --white: #ffffff;
    --burnt-white: #fff6ef;
    --soft-black: #030303;
    --black: #000000;
    --medium-grey: #dfe3e6;
    --soft-grey: #ebedee;
    --medium-pink: #ffd0e3;
    --soft-pink: #fed4e5;
    --soft-blue: #99cdeb;
    --blue: #0081cc;
    --grey: #a0abb1;
    --dark-grey: #838c90;
    font-size: 62.5%;
  }

  .sweet-toast{
    font-size: 14px;
  }

  ::-webkit-scrollbar{
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track{
    background: transparent;
  }

  ::-webkit-scrollbar-thumb{
    background: rgb(212, 210, 210);
    border-radius: 10px;
  }

  button, input, textarea, li {
    font-family: "Poppins", "Open Sans" , sans-serif;
  }

  body {
    box-sizing: border-box;
    min-width: 32rem;
    
    /* intervalo de tamanho */
    font-size: clamp(14px, 1.6rem, 2vw);
    font-family: "Poppins", "Open Sans" , sans-serif;

    width: 100%;
    background: var(--soft-grey);
  }

  /* ESTILIZAÇÃO DOS BOTÕES E INPUT */
  button, .button{
    font-family:Poppins;
    line-height: 0;
    font-weight: 500;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--white);
    color: var(--black);
    
    cursor: pointer;
    font-size: 100%;
    transition: .5s;
  }

  button:hover, .button:hover{
    filter: brightness(1.2);
  }

  img{
    width: 100%;
  }
`;

export default GlobalStyle;
