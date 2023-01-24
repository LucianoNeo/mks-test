import { CardContainer, CardImage, CardTitle, CloseCardButton, ImgContainer, Price, PriceText, PriceTextMobile, Quantity, QuantityButton, QuantityButtonsContainer, QuantityContainer, QuantityTitle } from './style';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../store/cartSlice';


interface CardProps {
  imageUrl: string;
  title: string;
  id: string;
  description: string;
  price: number;
  index: number;
}


const CheckoutProductCard: React.FC<CardProps> = ({ imageUrl, title, description, id, price, index }) => {

  const dispatch = useDispatch();

  const removeCartItemShop = (id: string) => {
    dispatch(removeProduct(id));
  }

  return (
    <CardContainer>
      <CloseCardButton
        onClick={() => removeCartItemShop(id)}
      >
        x
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
        <Price>
          <PriceTextMobile>R$399</PriceTextMobile>
        </Price>
      </QuantityContainer>
      <PriceText>R$399</PriceText>
    </CardContainer>
  )
};

export default CheckoutProductCard;
