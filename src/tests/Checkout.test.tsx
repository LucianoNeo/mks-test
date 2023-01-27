import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import Checkout from '../components/Checkout'
import mockStoreEmpty from '../store/mockStoreEmpty'

describe('Checkout Component', () => {


    it('should render correctly', () => {
        const { getByText } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Checkout />
                </Provider>
            )
        expect(getByText('Finalizar Compra')).toBeTruthy()
        expect(getByText('Total:')).toBeTruthy()
    })

    it('should Cart Modal not visible at start', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Checkout />
                </Provider>
            )
        const CheckoutModal = getByTestId("checkout");
        expect(CheckoutModal).not.toBeVisible()
    })

    it('should total value 0 at start', async () => {
        const { getByText } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Checkout />
                </Provider>
            )

        const totalValue = getByText("R$0");
        expect(totalValue).toBeInTheDocument()

    })

    it('should close Cart Modal on close button click', async () => {
        const { getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Checkout />
                </Provider>
            )
        const CheckoutModal = getByTestId("checkout");
        const closeButton = getByTestId("closeCheckoutButton");
        userEvent.click(closeButton)
        expect(CheckoutModal).not.toBeVisible()
    })


})