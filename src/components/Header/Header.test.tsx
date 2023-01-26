import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '.'
import mockStoreEmpty from '../../store/mockStoreEmpty'
import Checkout from '../Checkout'

describe('Header Component', () => {
    it('should render correctly', () => {
        const { getByText } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Header />
                </Provider>
            )
        expect(getByText('MKS')).toBeTruthy()
        expect(getByText('Sistemas')).toBeTruthy()
    })

    it('should show Cart Modal on button click', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Checkout />
                    <Header />
                </Provider>
            )
        fireEvent.click(getByTestId('showCartButton'))
        const CheckoutModal = screen.queryByTestId("checkout");
        expect(CheckoutModal).toBeVisible()
    })

})