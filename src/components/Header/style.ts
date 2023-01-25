import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
  width: 100vw;
  height: 101px;
  background-color: #0F52BA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 65px;
  z-index: 55;
  top: 0;
  left: 0;

  @media (max-width: 450px) {  
    height: 48px;
    padding: 28px 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: baseline;

  @media (max-width: 450px) {
    width: 150px;
  }
  `

export const Title = styled.h1`
font-weight: 600;
font-size: 40px;
color: #FFFFFF;

@media (max-width: 450px) {
  font-size: 32px;
  }
`

export const Subtitle = styled.h2`
font-weight: 300;
font-size: 20px;
color: #FFFFFF;

@media (max-width: 450px) {
  font-size: 16px;
  }
`

export const CartButton = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 90px;
height: 45px;
background: #FFFFFF;
border-radius: 8px;
font-weight: 700;
font-size: 18px;
color: #000000;
cursor: pointer;

@media (max-width: 450px) {
  width: 52px;
  height: 26px;
  font-size: 12px;
  }
`