import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from '../pages/home'
import { Products } from '../pages/products'
import { Details } from '../pages/details'
import { Session } from '../pages/session'
import { Table } from '../components/table'
import { RegisterProduct } from '../components/registerProduct'
import { UnavailableProduct } from '../components/unavailableProduct'
import { Manager } from '../pages/manager'
import { UpdateProduct } from '../components/updateProduct'
import { NotFound } from '../pages/notFound'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/> 
				<Route path="/session" element={<Session/>}/> 
				<Route path="/products" element={<Products/>}/> 
				<Route path="/products/name/:query" element={<Products/>}/> 
				<Route path="/products/:query/:category" element={<Products/>}/> 
				<Route path="/products/:category" element={<Products/>}/> 
				<Route path="/product/:id" element={<Details/>}/> 
				<Route path="/notfound" element={<NotFound/>}/> 
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
					<Route
						path="update/:id"
						element={<UpdateProduct/>}
					/>
				</Route> 
			</Routes>
		</BrowserRouter>
	)
}