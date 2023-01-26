import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #E5E5E5;
  font-family: 'Montserrat';
}


*::-webkit-scrollbar {
    width: 15px;
    height: 10px;
    border-radius: 4px;
}

*::-webkit-scrollbar-track {
    background: #333;

}

*::-webkit-scrollbar-thumb {
    background-color: #E5E5E5;
    border-radius: 4px;
    border: 2px solid #0F52BA;

}

`;




