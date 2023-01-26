import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import CheckoutProductCard from '.'
import store from '../../store'
import Checkout from '../Checkout'
import Header from '../Header'


describe('Checkout Product Card Component', () => {


    it('should render correctly', () => {
        const { getByText, getAllByText } =
            render(
                <Provider store={store}>
                    <CheckoutProductCard id={1} imageUrl='./apple-watch.png' price={399} title='Apple Iphone' quantity={1} description='' index={0} />
                </Provider>
            )
        expect(getByText('Apple Iphone')).toBeTruthy()
        expect(getAllByText('R$399')).toBeTruthy()
        expect(getByText('1')).toBeTruthy()
    })

    it('should have an image', () => {
        const { getByText, getAllByText, getByTestId } =
            render(
                <Provider store={store}>
                    <CheckoutProductCard id={1} imageUrl='./apple-watch.png' price={399} title='Apple Iphone' quantity={1} description='' index={0} />
                </Provider>
            )
        const image = getByTestId('product-image')
        expect(image).toBeInTheDocument()
    })

    it('should increase product quantity', () => {
        const { getByText, getAllByText, getByTestId, debug } =
            render(
                <Provider store={store}>
                    <Header />
                    <Checkout />
                </Provider>
            )
        const increaseButton = getByTestId('increase-quantity')
        const quantity = getByTestId('quantity')
        fireEvent.click(getByTestId('showCartButton'))
        expect(quantity).toHaveTextContent('2')
        fireEvent.click(increaseButton)
        expect(quantity).toHaveTextContent('3')
    })

    it('should decrease product quantity', () => {
        const { getByText, getAllByText, getByTestId, debug } =
            render(
                <Provider store={store}>
                    <Header />
                    <Checkout />
                </Provider>
            )
        const decreaseButton = getByTestId('decrease-quantity')
        const quantity = getByTestId('quantity')
        fireEvent.click(getByTestId('showCartButton'))
        expect(quantity).toHaveTextContent('3')
        fireEvent.click(decreaseButton)
        expect(quantity).toHaveTextContent('2')
    })


    it('should remove product on close button click', async () => {
        const { getByTestId } =
            render(
                <Provider store={store}>
                    <Header />
                    <Checkout />
                </Provider>
            )
        const productCard = getByTestId("cart-product");
        const removeButton = getByTestId("remove-product");
        userEvent.click(removeButton)
        expect(productCard).not.toBeVisible()
    })


})