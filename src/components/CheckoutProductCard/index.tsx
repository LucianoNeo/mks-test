import { CardContainer, CardImage, CardTitle, CloseCardButton, ImgContainer, PriceText, Quantity, QuantityButton, QuantityButtonsContainer, QuantityContainer, QuantityTitle } from './style';


interface CardProps {
  imageUrl: string;
  title: string;
}


const CheckoutProductCard: React.FC<CardProps> = ({ imageUrl, title }) => (
  <CardContainer>
    <CloseCardButton>
      X
    </CloseCardButton>
    <ImgContainer>
      <CardImage src={imageUrl} />
    </ImgContainer>
    <CardTitle>{title}</CardTitle>
    <QuantityContainer>
      <QuantityTitle>Qtd:</QuantityTitle>
      <QuantityButtonsContainer>
        <QuantityButton>-</QuantityButton>
        <Quantity>1</Quantity>
        <QuantityButton>+</QuantityButton>
      </QuantityButtonsContainer>
    </QuantityContainer>
    <PriceText>R$399</PriceText>
  </CardContainer>
);

export default CheckoutProductCard;
