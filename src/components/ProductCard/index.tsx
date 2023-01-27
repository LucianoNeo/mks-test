import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct, CartItem } from '../../store/cartSlice';
import { CardButton, CardContainer, CardImage, CardText, CardTitle, ImgContainer, Price, PriceText, TitlePriceContainer } from './style';


export interface CardProps {
  id: number;
  photo: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity: 1;
}


const Card: React.FC<CardProps> = ({ brand, photo, name, description, price, id, quantity }) => {
  const dispatch = useDispatch();
  const Msg = () => (
    <div>Produto: <br></br> <strong>{brand} {name}</strong> <br></br>adicionado ao carrinho!</div>
  )
  function toastify() {
    toast.success(<Msg />, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const addCartItemShop = (item: CartItem) => {
    dispatch(addProduct(item));
    toastify()
  }
  const item = {
    id, photo, name, description, price, quantity, brand
  }
  return (
    <>
      <CardContainer data-testid='productCard'>

        <ImgContainer>
          <CardImage src={photo}
            data-testid='productCardImage'
          />
        </ImgContainer>
        <TitlePriceContainer>
          <CardTitle>{brand} {name}</CardTitle>
          <Price>
            <PriceText>R${Number(price).toFixed()}</PriceText>
          </Price>
        </TitlePriceContainer>
        <CardText>{description}</CardText>
        <CardButton
          onClick={() => addCartItemShop(item)}
        >
          <Image src='./bag.svg' alt='carrinho' width={18} height={18} />
          COMPRAR
        </CardButton>
      </CardContainer>
    </>
  )
};

export default Card;
