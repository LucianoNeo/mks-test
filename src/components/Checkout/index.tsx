import CheckoutProductCard from "../CheckoutProductCard";
import { CheckoutContainer, CheckoutButton, CheckoutTitle, CloseButton, TotalContainer, CardsContainer } from "./style";

const Checkout = () => (
    <CheckoutContainer>
        <CheckoutTitle>Carrinho<br />de compras</CheckoutTitle>
        <CloseButton>X</CloseButton>
        <CardsContainer>
            <CheckoutProductCard
                imageUrl="./apple-watch.png"
                title="Apple Watch Series 4 GPS"
            />
            <CheckoutProductCard
                imageUrl="./apple-watch.png"
                title="Apple Watch Series 4 GPS"
            />



        </CardsContainer>
        <TotalContainer>
            <span>Total:</span>
            <span>R$798</span>
        </TotalContainer>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
    </CheckoutContainer>
)

export default Checkout;