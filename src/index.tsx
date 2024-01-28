import React from 'react'
import { GlobalStyle } from './style/global-style'
import ReactDOM from 'react-dom/client'
import { ProductsContextProvider } from './context/productsContext'
import { AppRoutes } from './routes'
import { ProductsPageContextProvider } from './context/productsPageContext'
import { ProductPageDetailContextProvider } from './context/productPageDetail'
import { SessionContextProvider } from './context/sessionContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		<ProductsContextProvider>
			<ProductsPageContextProvider>
				<ProductPageDetailContextProvider>
					<SessionContextProvider>
						<AppRoutes/>
					</SessionContextProvider>
				</ProductPageDetailContextProvider>
			</ProductsPageContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>
)