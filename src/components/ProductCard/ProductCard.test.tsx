import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ProductCard from '.'
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
    })



})