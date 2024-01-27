import React from 'react'
import { GlobalStyle } from './style/global-style'
import ReactDOM from 'react-dom/client'
import { ProductsContextProvider } from './context/productsContext'
import { AppRoutes } from './routes'
import { ProductsPageContextProvider } from './context/productsPageContext'
import { ProductPageDetailContextProvider } from './context/productPageDetail'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		<ProductsContextProvider>
			<ProductsPageContextProvider>
				<ProductPageDetailContextProvider>
					<AppRoutes/>
				</ProductPageDetailContextProvider>
			</ProductsPageContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>
)