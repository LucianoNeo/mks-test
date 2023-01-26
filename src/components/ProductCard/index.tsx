import Image from 'next/image';
import { CardButton, CardContainer, CardImage, CardText, CardTitle, ImgContainer, Price, PriceText, TitlePriceContainer } from './style'
import {
  useDispatch
} from 'react-redux';

import { addProduct, CartItem } from '../../store/cartSlice';
import { IProduct } from 'src/types';



interface CardProps {
  id: number;
  imageUrl: string;
  title: string;
  brand: string;
  text: string;
  price: number;
  quantity: 1;
}


const Card: React.FC<CardProps> = ({ brand, imageUrl, title, text, price, id, quantity }) => {
  const dispatch = useDispatch();

  const addCartItemShop = (item: CartItem) => {
    dispatch(addProduct(item));
  }
  const item = {
    id, imageUrl, title, description: text, price, quantity, brand
  }
  return (
    <CardContainer>
      <ImgContainer>
        <CardImage src={imageUrl}
          data-testid='productCardImage'
        />
      </ImgContainer>
      <TitlePriceContainer>
        <CardTitle>{brand} {title}</CardTitle>
        <Price>
          <PriceText>R${Number(price).toFixed()}</PriceText>
        </Price>
      </TitlePriceContainer>
      <CardText>{text}</CardText>
      <CardButton
        onClick={() => addCartItemShop(item)}
      >
        <Image src='./bag.svg' alt='carrinho' width={18} height={18} />
        COMPRAR
      </CardButton>
    </CardContainer>
  )
};

export default Card;
