import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from '../pages'

import mockStoreEmpty from '../store/mockStoreEmpty'



describe('Home Page', () => {

    it('should render skeleton while loading', () => {
        const { getByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Home />
                </Provider>
            )
        screen.debug()
        const container = getByTestId('productsContainer');
        const skeleton = container.querySelector('.react-loading-skeleton');
        expect(skeleton).toBeTruthy();
    })

    it('should render correctly', async () => {
        const { getByTestId, findAllByTestId } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Home />
                </Provider>
            )

        const productCard = await findAllByTestId('productCard')
        expect(getByTestId('header')).toBeInTheDocument();
        expect(getByTestId('checkout')).toBeInTheDocument();
        expect(productCard[0]).toBeInTheDocument();
    })


})