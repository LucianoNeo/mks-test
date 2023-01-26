import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import CheckoutProductCard from '../components/CheckoutProductCard'
import store from '../store'
import Checkout from '../components/Checkout'
import Header from '../components/Header'
import mockStore from '../store/mockStoreWithData'
import mockStoreEmpty from '../store/mockStoreEmpty'

describe('Checkout Product Card Component', () => {


    it('should render correctly', () => {
        const { getByText, getAllByText } =
            render(
                <Provider store={mockStore}>
                    <CheckoutProductCard id={1} imageUrl='./apple-watch.png' price={399} title='Iphone' quantity={1} description='' index={0} brand='Apple' />
                </Provider>
            )
        expect(getByText('Apple Iphone')).toBeTruthy()
        expect(getAllByText('R$399')).toBeTruthy()
        expect(getByText('1')).toBeTruthy()
    })

    it('should have an image', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStore}>
                    <CheckoutProductCard id={1} imageUrl='./apple-watch.png' price={399} title='Iphone' quantity={1} description='' index={0} brand='Apple' />
                </Provider>
            )
        const image = getByTestId('product-image')
        expect(image).toBeInTheDocument()
    })

    it('should increase product quantity', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStore}>
                    <Header />
                    <Checkout />
                </Provider>
            )
        const increaseButton = getByTestId('increase-quantity')
        const quantity = getByTestId('quantity')
        fireEvent.click(getByTestId('showCartButton'))
        expect(quantity).toHaveTextContent('1')
        fireEvent.click(increaseButton)
        expect(quantity).toHaveTextContent('2')
    })

    it('should decrease product quantity', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStore}>
                    <Header />
                    <Checkout />
                </Provider>
            )
        const decreaseButton = getByTestId('decrease-quantity')
        const quantity = getByTestId('quantity')
        fireEvent.click(getByTestId('showCartButton'))
        expect(quantity).toHaveTextContent('2')
        fireEvent.click(decreaseButton)
        expect(quantity).toHaveTextContent('1')
    })


    it('should remove product on close button click', async () => {
        const { getByTestId } =
            render(
                <Provider store={mockStore}>
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