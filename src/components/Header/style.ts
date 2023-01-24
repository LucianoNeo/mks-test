import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 101px;
  background-color: #0F52BA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 65px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: baseline;
  `

export const Title = styled.h1`
font-weight: 600;
font-size: 40px;
color: #FFFFFF;
`

export const Subtitle = styled.h2`
font-weight: 300;
font-size: 20px;
color: #FFFFFF;
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
`