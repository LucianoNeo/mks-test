import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toogleCheckout } from "../../store/checkoutSlice";
import { checkout } from '../../store/cartSlice'
import CheckoutProductCard from "../CheckoutProductCard";
import { CardsContainer, CheckoutButton, CheckoutContainer, CheckoutTitle, CloseButton, TotalContainer } from "./style";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state: RootState) => state.cart.items);
    const visible = useSelector((state: RootState) => state.checkout.visible)
    const dispatch = useDispatch();

    function toastify() {
        toast.success(`Obrigado por comprar conosco!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const ToogleModal = () => {
        dispatch(toogleCheckout());
    }

    const HandleCheckout = () => {
        dispatch(checkout());
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
                {cart.length == 0 &&
                    <span>O Carrinho está vazio...</span>
                }
                {cart.map((item, index) => (
                    <CheckoutProductCard
                        key={item.id}
                        photo={item.photo}
                        name={item.name}
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
                onClick={() => {
                    HandleCheckout()
                    ToogleModal()
                    toastify()
                }}
            >Finalizar Compra</CheckoutButton>
        </CheckoutContainer>
    )

}

export default Checkout;