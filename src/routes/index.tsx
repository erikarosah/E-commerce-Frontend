import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from '../pages/home'
import { Products } from '../pages/products'
import { Details } from '../pages/details'
import { Session } from '../pages/session'
import { Table } from '../components/table'
import { RegisterProduct } from '../components/registerProduct'
import { UnavailableProduct } from '../components/unavailableProduct'
import { Manager } from '../pages/manager'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/> 
				<Route path="/session" element={<Session/>}/> 
				<Route path="/manager" element={<Manager/>}>
					<Route
						path="all"
						element={<Table />}
					/>
					<Route
						path="register"
						element={<RegisterProduct/>}
					/>
					<Route
						path="unavailable"
						element={<UnavailableProduct/>}
					/>
				</Route> 
				<Route path="/product/:id" element={<Details/>}/> 
				<Route path="/products/:page" element={<Products/>}/> 
				<Route path="/products/name/:page/:query" element={<Products/>}/> 
				<Route path="/products/category/:page/:category" element={<Products/>}/> 
				<Route path="/products/category/type/:page/:category-filter/:query" element={<Products/>}/> 
			</Routes>
		</BrowserRouter>
	)
}