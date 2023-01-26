import { fireEvent, getByTestId, queryAllByTestId, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '.'
import mockStore from '../store/mockStoreWithData'
import mockStoreEmpty from '../store/mockStoreEmpty/'
import Home from '.'



describe('Home Page', () => {

    it('should render skeleton while loading', () => {
        const { getByText, getByTestId, getAllByTestId, findAllByTestId, findByTestId, queryAllByTestId } =
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
        const { getByText, getByTestId, getAllByTestId, findAllByTestId, findByTestId, queryAllByTestId } =
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