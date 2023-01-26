import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toogleCheckout } from "../../store/checkoutSlice";
import CheckoutProductCard from "../CheckoutProductCard";
import { CardsContainer, CheckoutButton, CheckoutContainer, CheckoutTitle, CloseButton, TotalContainer } from "./style";


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
        <CheckoutContainer data-testid="checkout" style={visible ? { display: 'flex' } : { display: 'none' }}>
            <CheckoutTitle>Carrinho<br />de compras</CheckoutTitle>
            <CloseButton
                data-testid="closeCheckoutButton"
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
                        brand={item.brand}
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