import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from '../pages/home'
import { Products } from '../pages/products'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/"  element={<Home/>}/> 
				<Route path="/products/:page" element={<Products/>}/> 
				<Route path="/products/name/:page/:query" element={<Products/>}/> 
				<Route path="/products/category/:page/:category" element={<Products/>}/> 
			</Routes>
		</BrowserRouter>
	)
}