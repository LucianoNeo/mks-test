import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Home from '../pages'
import mockStoreEmpty from '../store/mockStoreEmpty'
import mockStore from '../store/mockStoreWithData'


describe('ProductCard Component', () => {

    it('should render correctly', () => {
        const { getByText, getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <ProductCard id={1} imageUrl='./apple-watch.png' price={399} title='Iphone' quantity={1} text='descricao' brand='Apple' />
                </Provider>
            )
        const image = getByTestId('productCardImage')
        expect(getByText('Apple Iphone')).toBeInTheDocument()
        expect(getByText('descricao')).toBeInTheDocument()
        expect(getByText('R$399')).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(getByText('COMPRAR')).toBeInTheDocument()
    })

    it('should add a item to the cart', async () => {
        const { } =
            render(
                <Provider store={mockStore}>
                    <Home />
                </Provider>
            )

        const buyButton = await screen.findAllByText('COMPRAR')
        const cartQuantity = screen.getByTestId('itemsQuantity')
        expect(cartQuantity).toHaveTextContent('1')
        fireEvent.click(buyButton[0])
        expect(cartQuantity).toHaveTextContent('2')

    })

    it('should render a product card into the cart modal', async () => {
        const { getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Home />
                </Provider>
            )

        const buyButton = await screen.findAllByText('COMPRAR')
        const cartButton = getByTestId('showCartButton')
        fireEvent.click(buyButton[0])
        fireEvent.click(cartButton)
        const checkoutModal = screen.queryByTestId("checkout");
        expect(checkoutModal).toBeVisible()

        const card = screen.queryByTestId("cart-product")
        expect(card).toBeInTheDocument()

    })


})