import React from 'react'
import { GlobalStyle } from './style/global-style'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from './context/productsContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle/>
			<ProductsContextProvider>
				<Home />
			</ProductsContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)