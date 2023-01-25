import { CardContainer, CardImage, CardTitle, CloseCardButton, ImgContainer, Price, PriceText, PriceTextMobile, Quantity, QuantityButton, QuantityButtonsContainer, QuantityContainer, QuantityTitle } from './style';
import { useDispatch } from 'react-redux';
import { addQuantity, removeProduct, removeQuantity } from '../../store/cartSlice';


interface CardProps {
  imageUrl: string;
  title: string;
  id: number;
  description: string;
  price: number;
  index: number;
  quantity: number;
}


const CheckoutProductCard: React.FC<CardProps> = ({ imageUrl, title, description, id, price, index, quantity }) => {

  const dispatch = useDispatch();

  const removeCartItemShop = (id: number) => {
    dispatch(removeProduct(id));
  }

  const addItemQuantity = (id: number) => {
    dispatch(addQuantity(id))
  }

  const removeItemQuantity = (id: number) => {
    dispatch(removeQuantity(id))
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
          <QuantityButton
            onClick={() => removeItemQuantity(id)}
          >-</QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton
            onClick={() => addItemQuantity(id)}
          >+</QuantityButton>
        </QuantityButtonsContainer>
        <Price>
          <PriceTextMobile>R${Number(price).toFixed()}</PriceTextMobile>
        </Price>
      </QuantityContainer>
      <PriceText>R${Number(price).toFixed()}</PriceText>
    </CardContainer>
  )
};

export default CheckoutProductCard;
