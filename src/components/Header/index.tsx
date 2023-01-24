import Image from 'next/image';
import { useSelector } from 'react-redux';
import { cartStateData } from '../../store/cartSlice';
import { CartButton, StyledHeader, Subtitle, Title, TitleContainer } from './style';


const Header = () => {
    const cart = useSelector(cartStateData);
    console.log(cart)
    return (
        <StyledHeader>
            <TitleContainer>
                <Title>MKS</Title>
                <Subtitle>Sistemas</Subtitle>
            </TitleContainer>
            <CartButton>
                <Image src='./cart.svg' alt='carrinho' width={18} height={18} />
                <span>1</span>
            </CartButton>
        </StyledHeader>

    )
};

export default Header;