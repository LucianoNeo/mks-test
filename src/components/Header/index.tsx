import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toogleCheckout } from 'src/store/checkoutSlice';
import { CartButton, StyledHeader, Subtitle, Title, TitleContainer } from './style';



const Header = () => {
    const cart = useSelector((state: RootState) => state.cart.items);

    const dispatch = useDispatch();

    const ToogleModal = () => {
        dispatch(toogleCheckout());
    }

    return (
        <StyledHeader>
            <TitleContainer>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleContainer>
            <CartButton
                onClick={ToogleModal}
            >
                <Image src='./cart.svg' alt='carrinho' width={18} height={18} />
                <span>{cart.length}</span>
            </CartButton>
        </StyledHeader>

    )
};

export default Header;