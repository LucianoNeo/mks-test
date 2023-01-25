import CheckoutProductCard from "../CheckoutProductCard";
import { CheckoutContainer, CheckoutButton, CheckoutTitle, CloseButton, TotalContainer, CardsContainer } from "./style";
import { CartState } from '../../store/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "src/store";
import { toogleCheckout } from "src/store/checkoutSlice";


const Checkout = () => {
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state: RootState) => state.cart.items);
    const visible = useSelector((state: RootState) => state.checkout.visible)
    const dispatch = useDispatch();

    const ToogleModal = () => {
        dispatch(toogleCheckout());
    }
    useEffect(() => {
        let totalPrice = 0
        cart.map((item, index) => totalPrice += Number(item.price) * item.quantity)
        setTotalCart(totalPrice)
    }, [cart])

    return (
        <CheckoutContainer style={visible ? { display: 'flex' } : { display: 'none' }}>
            <CheckoutTitle>Carrinho<br />de compras</CheckoutTitle>
            <CloseButton
                onClick={ToogleModal}
            >X</CloseButton>
            <CardsContainer>
                {cart.map((item, index) => (
                    <CheckoutProductCard
                        index={index}
                        key={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        id={item.id}
                        description={item.description}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </CardsContainer>
            <TotalContainer>
                <span>Total:</span>
                <span>R${totalCart}</span>
            </TotalContainer>
            <CheckoutButton
                onClick={ToogleModal}
            >Finalizar Compra</CheckoutButton>
        </CheckoutContainer>
    )

}

export default Checkout;