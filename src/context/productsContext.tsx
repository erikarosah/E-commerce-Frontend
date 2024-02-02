import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'
import { Params } from 'react-router-dom'

export interface ProductProps {
	available: string,
	category: boolean,
	id: string,
	image: string,
	name: string,
	old_price: number,
	price: number,
	sizes: string[]
}

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
	loading: boolean,
    popularFemProducts: Array<ProductProps>,
    popularMascProducts: Array<ProductProps>,
    popularKidsProducts: Array<ProductProps>,
	unavailableProducts: Array<ProductProps>,
    allProducts: Array<ProductProps>,
    FetchDataHomepage: () => void,
    RemoveProduct: (id: string) => void,
	FetchUnavailableProducts: () => void,
	FetchAllProducts: () => void,
	UpdateProduct: (
		params: Readonly<Params<string>>,
		name: string,
		image: string,
		category: string,
		price: string,
		old_price: string,
		sizes: string,
		available: string
	) => void
}

const ProductsContext = createContext<ContextProps>({} as ContextProps)

export function ProductsContextProvider({children}: ChildrenProps){
	const [ popularFemProducts, setPopularFemProducts ] = useState<ProductProps[]>([])
	const [ popularMascProducts, setPopularMascProducts ] = useState<ProductProps[]>([])
	const [ popularKidsProducts, setPopularKidsProducts ] = useState<ProductProps[]>([])
	const [ allProducts, setAllProducts ] = useState<ProductProps[]>([])
	const [ unavailableProducts, setUnavailableProducts ] = useState<ProductProps[]>([])
	const [ loading, setLoading ] = useState(true)

	function UpdateProduct(
		params:  Readonly<Params<string>>,
		name: string,
		image: string,
		category: string,
		price: string,
		old_price: string,
		sizes: string,
		available: string	
	) {
		const controller = new AbortController()
		try {
			instanceAxios.put(`/product/${params.id}`, {
				name,
				image,
				category,
				price,
				old_price,
				available,
				sizes: sizes.toUpperCase().replace( /[^a-zA-Z0-9]/g, '').split('')
			})
				.then(() => window.location.href='/manager/all')
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function FetchDataHomepage() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/fem')
				.then((data) => setPopularFemProducts(data.data[0]))
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			instanceAxios.get('/products/masc')
				.then((data) => setPopularMascProducts(data.data[0]))
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			instanceAxios.get('/products/kids')
				.then((data) => setPopularKidsProducts(data.data[0]))
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function FetchAllProducts() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products')
				.then((data) => setAllProducts(data.data[0]))
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function FetchUnavailableProducts() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/unavailables')
				.then((data) => setUnavailableProducts(data.data[0]))
				.catch((erro) => console.log(erro))
			setLoading(false)
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function RemoveProduct(id: string) {
		const controller = new AbortController()
	
		try {
			instanceAxios.delete(`/product/${id}`)
				.then()
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)
			window.location.href='/manager/all'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	return(
		<ProductsContext.Provider value={{  
			popularFemProducts, 
			popularMascProducts, 
			popularKidsProducts,
			unavailableProducts,
			loading,
			allProducts,
			FetchAllProducts,
			FetchDataHomepage,
			FetchUnavailableProducts,
			RemoveProduct,
			UpdateProduct,
		}}>
			{children}
		</ProductsContext.Provider>
	)
}

export const useProductsContext = () => useContext(ProductsContext)