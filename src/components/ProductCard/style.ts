import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;
  width: 217px;
  height: 285px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  overflow: hidden;
  padding: 14px;
  margin-bottom: 32px;
`;

export const ImgContainer = styled.div`
width: 100%;
display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;
margin-top: 4px;
`

export const CardImage = styled.img`
  max-height: 100px;
`;

export const TitlePriceContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
margin-top: 10px;

`

export const CardTitle = styled.h3`
  font-weight: 400;
font-size: 16px;
max-width: 120px;
min-height: 20px;
`;

export const CardText = styled.p`
  font-weight: 300;
  font-size: 10px;
  margin-top: 8px;
`;

export const Price = styled.div`
background: #373737;
border-radius: 5px;
min-width: 64px;
height: 26px;
display: flex;
justify-content: center;
align-items: center;
`

export const PriceText = styled.span`
  font-weight: 700;
font-size: 15px;
color: white;

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