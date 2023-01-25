import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '.'
import store from '../../store'
import Checkout from '../Checkout'


describe('Header Component', () => {
    it('should render correctly', () => {
        const { getByText } =
            render(
                <Provider store={store}>
                    <Header />
                </Provider>
            )
        expect(getByText('MKS')).toBeTruthy()
        expect(getByText('Sistemas')).toBeTruthy()
    })

    it('should show Cart Modal on button click', () => {
        const { getByTestId } =
            render(
                <Provider store={store}>
                    <Checkout />
                    <Header />
                </Provider>
            )
        fireEvent.click(getByTestId('showCartButton'))
        const CheckoutModal = screen.queryByTestId("checkout");
        expect(CheckoutModal).toBeVisible()
    })

})