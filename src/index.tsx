import React from 'react'
import '@stripe/stripe-js' 
import { GlobalStyle } from './style/global-style'
import ReactDOM from 'react-dom/client'
import { ProductsContextProvider } from './context/productsContext'
import { AppRoutes } from './routes'
import { ProductsPageContextProvider } from './context/productsPageContext'
import { SessionContextProvider } from './context/sessionContext'
import { CartContextProvider } from './context/cartContext'
import { DetailPageContextProvider } from './context/detailPageContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		<ProductsContextProvider>
			<ProductsPageContextProvider>
				<DetailPageContextProvider>
					<SessionContextProvider>
						<CartContextProvider>
							<AppRoutes/>
						</CartContextProvider>
					</SessionContextProvider>
				</DetailPageContextProvider>
			</ProductsPageContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>
)