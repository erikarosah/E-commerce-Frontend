import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'

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
    popularFemProducts: Array<ProductProps>,
    popularMascProducts: Array<ProductProps>,
    popularKidsProducts: Array<ProductProps>
    FetchData: () => void;
}

const ProductsContext = createContext<ContextProps>({} as ContextProps)

export function ProductsContextProvider({children}: ChildrenProps){
	const [ popularFemProducts, setPopularFemProducts ] = useState<ProductProps[]>([])
	const [ popularMascProducts, setPopularMascProducts ] = useState<ProductProps[]>([])
	const [ popularKidsProducts, setPopularKidsProducts ] = useState<ProductProps[]>([])

	async function FetchData() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/category/1/fem').then((data) => setPopularFemProducts(data.data[0]))
			instanceAxios.get('/products/category/1/masc').then((data) => setPopularMascProducts(data.data[0]))
			instanceAxios.get('/products/category/1/kids').then((data) => setPopularKidsProducts(data.data[0]))
			
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
			FetchData
		}}>
			{children}
		</ProductsContext.Provider>
	)
}

export const useProductsContext = () => useContext(ProductsContext)