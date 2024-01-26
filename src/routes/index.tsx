import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from '../pages/home'
import { Products } from '../pages/products'
import { Details } from '../pages/details'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/> 
				<Route path="/product/:id" element={<Details/>}/> 
				<Route path="/products/:page" element={<Products/>}/> 
				<Route path="/products/name/:page/:query" element={<Products/>}/> 
				<Route path="/products/category/:page/:category" element={<Products/>}/> 
				<Route path="/products/category/type/:page/:category-filter/:query" element={<Products/>}/> 
			</Routes>
		</BrowserRouter>
	)
}