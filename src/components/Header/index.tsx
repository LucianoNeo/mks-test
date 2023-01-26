import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toogleCheckout } from '../../store/checkoutSlice';
import { CartButton, StyledHeader, Subtitle, Title, TitleContainer } from './style';



const Header = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const [totalItens, setTotalItens] = useState(0)


    function getTotalItens() {
        const total = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItens(total);
    }

    useEffect(() => {
        getTotalItens()
    }, [cart])

    const dispatch = useDispatch();

    const ToogleModal = () => {
        dispatch(toogleCheckout());
    }

    return (
        <StyledHeader data-testid='header'>
            <TitleContainer>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleContainer>
            <CartButton data-testid='showCartButton'
                onClick={ToogleModal}
            >
                <Image src='./cart.svg' alt='carrinho' width={18} height={18} />
                <span data-testid='itemsQuantity'>{totalItens}</span>
            </CartButton>
        </StyledHeader>

    )
};

export default Header;