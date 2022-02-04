import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';

import theme from '../../global/styles/theme'
import { Register } from '.'

const Providers: React.FC = ({ children }) => (
    <NavigationContainer>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </NavigationContainer>
)


describe('Regsiter screen', () => {
    it('should be open category modal when user click on button', async () => {
        const { getByTestId } = render(
            <Register />,
            {
                wrapper: Providers
            }
        )

        const categoryModal = getByTestId('modal-category')
        const buttonCategory = getByTestId('button-category')
        fireEvent.press(buttonCategory)

        await waitFor(() => { //para fazer test em funções assincroans
            expect(categoryModal.props.visible).toBeTruthy()
        })
    })
})