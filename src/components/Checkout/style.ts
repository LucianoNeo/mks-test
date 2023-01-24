import styled from "styled-components"

export const CheckoutContainer = styled.section`
position: absolute;
right: 0px;
top: 0px;
width: 33vw;
height: 100vh;
background: #0F52BA;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
z-index: 55;
line-height: 15px;
color: #FFFFFF;
padding: 36px 47px;
font-weight: 700;
font-size: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 124px;

@media (max-width: 450px) {
    width: 90vw;
    height: 100vh;
  }
`

export const CardsContainer = styled.div`
margin-top: 70px;
margin-right: 20px;
width: 110%;
height: 80%;
overflow: auto;
padding-top: 10px;

@media (max-width: 450px) {
    margin-top: 30px;
  }
`

export const CheckoutTitle = styled.h3`
width: 150px;
line-height: 33px;

`

export const CloseButton = styled.button`
position: absolute;
top: 55px;
right: 20px;
background: #000000;
width: 38px;
height: 38px;
border-radius: 100%;
color: white;
font-weight: 400;
font-size: 28px;
cursor: pointer;
`
export const CheckoutButton = styled.div`
position: absolute;
height: 97px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: #000000;
bottom: 0;
left: 0;
cursor: pointer;
`

export const TotalContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 700;
font-size: 22px;;
margin-top: 16px;
`