import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ProductCard from '.'
import Home from '../../pages'
import store from '../../store'



describe('ProductCard Component', () => {

    it('should render correctly', () => {
        const { getByText, getByTestId } =
            render(
                <Provider store={store}>
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
                <Provider store={store}>
                    <Home />
                </Provider>
            )

        const buyButton = await screen.findAllByText('COMPRAR')
        const cartQuantity = screen.getByTestId('itemsQuantity')
        expect(cartQuantity).toHaveTextContent('2')
        fireEvent.click(buyButton[0])
        expect(cartQuantity).toHaveTextContent('3')

    })

    it('should render a product card into the cart modal', async () => {
        const { getByTestId } =
            render(
                <Provider store={store}>
                    <Home />
                </Provider>
            )

        const buyButton = await screen.findAllByText('COMPRAR')
        const cartButton = getByTestId('showCartButton')
        fireEvent.click(buyButton[0])
        fireEvent.click(cartButton)
        const checkoutModal = screen.queryByTestId("checkout");
        expect(checkoutModal).toBeVisible()
        const card = screen.queryAllByTestId("cart-product")
        expect(card[0]).toBeInTheDocument()

    })


})