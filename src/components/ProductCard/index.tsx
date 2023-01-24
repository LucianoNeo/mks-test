import Image from 'next/image';
import { CardButton, CardContainer, CardImage, CardText, CardTitle, ImgContainer, Price, PriceText, TitlePriceContainer } from './style'


interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
}


const Card: React.FC<CardProps> = ({ imageUrl, title, text }) => (
  <CardContainer>
    <ImgContainer>
      <CardImage src={imageUrl} />
    </ImgContainer>
    <TitlePriceContainer>
      <CardTitle>{title}</CardTitle>
      <Price>
        <PriceText>R$399</PriceText>
      </Price>
    </TitlePriceContainer>
    <CardText>{text}</CardText>
    <CardButton>
      <Image src='./bag.svg' alt='carrinho' width={18} height={18} />
      COMPRAR
    </CardButton>
  </CardContainer>
);

export default Card;
