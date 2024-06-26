import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/globalStyle.ts'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import { CartProvider } from './hooks/cart.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
