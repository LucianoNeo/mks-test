import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import Checkout from '.'
import store from '../../store'


describe('Checkout Component', () => {


    it('should render correctly', () => {
        const { getByText } =
            render(
                <Provider store={store}>
                    <Checkout />
                </Provider>
            )
        expect(getByText('Finalizar Compra')).toBeTruthy()
        expect(getByText('Total:')).toBeTruthy()
    })

    it('should Cart Modal not visible at start', () => {
        const { getByTestId } =
            render(
                <Provider store={store}>
                    <Checkout />
                </Provider>
            )
        const CheckoutModal = getByTestId("checkout");
        expect(CheckoutModal).not.toBeVisible()
    })

    it('should total value 0 at start', async () => {
        const { getByTestId, getByText, debug } =
            render(
                <Provider store={store}>
                    <Checkout />
                </Provider>
            )

        const totalValue = getByText("R$0");
        expect(totalValue).toBeInTheDocument()

    })

    it('should close Cart Modal on close button click', async () => {
        const { getByTestId } =
            render(
                <Provider store={store}>
                    <Checkout />
                </Provider>
            )
        const CheckoutModal = getByTestId("checkout");
        const closeButton = getByTestId("closeCheckoutButton");
        userEvent.click(closeButton)
        expect(CheckoutModal).not.toBeVisible()
    })


})