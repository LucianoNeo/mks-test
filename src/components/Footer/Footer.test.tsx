import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from '../../pages'
import Footer from '.'
import mockStoreEmpty from '../../store/mockStoreEmpty'

describe('Footer Component', () => {


    it('should render correctly', () => {
        const { getByText } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Footer />
                </Provider>
            )
        expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
    })

    it('should appear in home page', () => {
        const { getByText } =
            render(
                <Provider store={mockStoreEmpty}>
                    <Home />
                </Provider>
            )
        expect(getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
    })

})