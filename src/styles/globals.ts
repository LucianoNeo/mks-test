import styled, { createGlobalStyle } from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 80%;
  margin: 0 auto;
  margin-top: 217px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  `

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




