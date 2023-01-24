import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;
  width: 95%;
  height: 95px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2C2C2C;
  padding: 0px 24px;
  margin-bottom: 28px;
`;

export const ImgContainer = styled.div`
height: 57px;
display: flex;
justify-content: center;
align-items: center;
`

export const CardImage = styled.img`
  height: 90%;
`;

export const CardTitle = styled.h3`
font-weight: 400;
font-size: 13px;
line-height: 17px;
width: 113px;
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
width: 50px;
`
export const QuantityTitle = styled.span`
font-weight: 400;
font-size: 5px;
line-height: 6px;
`

export const QuantityButtonsContainer = styled.div`
margin-top: 4px;
width: 100%;
height: 19px;
background: #FFFFFF;
border: 0.3px solid #BFBFBF;
border-radius: 4px;
font-weight: 400;
font-size: 8px;
line-height: 10px;
display: flex;
justify-content: space-evenly;
align-items: center;
`
export const QuantityButton = styled.button`
cursor: pointer;
font-weight: 400;
font-size: 8px;
line-height: 10px;
color: #000000;
background-color: transparent;
border: none;
width: 18px;
:hover {
  transform: scale(1.5);
}
`

export const Quantity = styled.span`
height: 80%;
width: 18px;
border: 0.2px solid #BFBFBF;
display: flex;
align-items: center;
justify-content: center;
border-top: none;
border-bottom: none;
`




export const PriceText = styled.span`
font-weight: 700;
font-size: 15px;
color: #000000;

`;

export const CardButton = styled.div`
position: absolute;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
gap: 14px;
align-items: center;
font-weight: 600;
font-size: 14px;
background-color: #0F52BA;
color: #fff;
width: 100%;
height: 32px;
cursor: pointer;
`;

export const CloseCardButton = styled.button`
position: absolute;
font-weight: 400;
font-size: 14px;
line-height: 17px;
width: 18px;
height: 18px;
background-color: #000000;
border-radius: 100%;
color: #FFFFFF;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
top: -10px;
right: -5px;
z-index: 55;
`