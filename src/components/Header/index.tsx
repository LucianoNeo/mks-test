import Image from 'next/image';
import { CartButton, StyledHeader, Subtitle, Title, TitleContainer } from './style'

const Header = () => (
    <StyledHeader>
        <TitleContainer>
            <Title>MKS</Title>
            <Subtitle>Sistemas</Subtitle>
        </TitleContainer>
        <CartButton>
            <Image src='./cart.svg' alt='carrinho' width={18} height={18} />
            <span>0</span>
        </CartButton>
    </StyledHeader>
);

export default Header;