import CheckoutProductCard from "../CheckoutProductCard";
import { CheckoutContainer, CheckoutButton, CheckoutTitle, CloseButton, TotalContainer, CardsContainer } from "./style";
import { CartState, cartStateData } from '../../store/cartSlice';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Checkout = () => {
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state: CartState) => state.items);

    // useEffect(() => {
    //     let totalPrice = 0
    //     cart.map((item, index) => totalPrice += item.price)
    //     setTotalCart(totalPrice)
    // }, [cart])

    return (
        <CheckoutContainer>
            <CheckoutTitle>Carrinho<br />de compras</CheckoutTitle>
            <CloseButton>X</CloseButton>
            <CardsContainer>
                {/* {cart.map((item, index) => (
                    <CheckoutProductCard
                        index={index}
                        key={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        id={item.id}
                        description={item.description}
                        price={item.price}
                    />
                ))} */}
                <CheckoutProductCard
                    description=""
                    index={0}
                    imageUrl="./apple-watch.png"
                    title="Apple Iphone 10"
                    price={399}
                    id='1234578'
                />
                <CheckoutProductCard
                    description=""
                    index={0}
                    imageUrl="./apple-watch.png"
                    title="Apple Iphone 10"
                    price={399}
                    id='1234578'
                />
            </CardsContainer>
            <TotalContainer>
                <span>Total:</span>
                <span>R${totalCart}</span>
            </TotalContainer>
            <CheckoutButton>Finalizar Compra</CheckoutButton>
        </CheckoutContainer>
    )

}

export default Checkout;