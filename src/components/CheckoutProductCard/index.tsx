import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addQuantity, removeProduct, removeQuantity } from '../../store/cartSlice';
import { CardContainer, CardImage, CardTitle, CloseCardButton, ImgContainer, Price, PriceText, PriceTextMobile, Quantity, QuantityButton, QuantityButtonsContainer, QuantityContainer, QuantityTitle } from './style';

interface CardProps {
  imageUrl: string;
  title: string;
  id: number;
  description: string;
  price: number;
  index: number;
  quantity: number;
  brand: string
}



const CheckoutProductCard: React.FC<CardProps> = ({ imageUrl, title, description, id, price, index, quantity, brand }) => {

  const dispatch = useDispatch();

  const Msg = () => (
    <div>Produto: <br></br> <strong>{brand} {title}</strong> <br></br>removido do carrinho!</div>
  )

  function toastify() {
    toast.error(<Msg />, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const removeCartItemShop = (id: number) => {
    dispatch(removeProduct(id));
    toastify()
  }

  const addItemQuantity = (id: number) => {
    dispatch(addQuantity(id))
  }

  const removeItemQuantity = (id: number) => {
    dispatch(removeQuantity(id))
  }

  return (
    <CardContainer
      data-testid='cart-product'
    >
      <CloseCardButton
        data-testid='remove-product'
        onClick={() => removeCartItemShop(id)}
      >
        x
      </CloseCardButton>
      <ImgContainer>
        <CardImage src={imageUrl} data-testid='product-image' />
      </ImgContainer>
      <CardTitle>{brand} {title}</CardTitle>
      <QuantityContainer>
        <QuantityTitle>Qtd:</QuantityTitle>
        <QuantityButtonsContainer>
          <QuantityButton
            data-testid='decrease-quantity'
            onClick={() => removeItemQuantity(id)}
          >-</QuantityButton>
          <Quantity data-testid='quantity'>{quantity}</Quantity>
          <QuantityButton
            data-testid='increase-quantity'
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
