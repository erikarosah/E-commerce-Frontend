import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'
import { ProductProps } from './productsContext'
import { Params } from 'react-router-dom'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
    data: Array<ProductProps>,
    title: string,
    filter: string,
	loading: boolean,
    FetchData: (params: Readonly<Params<string>>) => void,
    SearchByFilter: (params: Readonly<Params<string>>) => void,
    setFilter: (value: string) => void,
	setLoading: (value: boolean) => void
}

const ProductsPageContext = createContext<ContextProps>({} as ContextProps)

export function ProductsPageContextProvider({children}: ChildrenProps){
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ title, setTitle ] = useState('')
	const [ filter, setFilter ] = useState('')
	const [ loading, setLoading ] = useState(true)

	async function FetchData(params: Readonly<Params<string>>) {
		const controller = new AbortController()
		
		try {
			if(params.query) {
				instanceAxios.get(`/products/name/${params.page}/${params.query}`).then((data) => setData(data.data[0]))
				setTitle(params.query.toUpperCase())
				setLoading(false)
				return
			}

			if(params.category) {
				instanceAxios.get(`/products/category/${params.page}/${params.category}`).then((data) => setData(data.data[0]))
				switch(params.category) {
				case 'fem': 
					setTitle('Feminino')
					break
				case 'masc': 
					setTitle('Masculino')
					break
				case 'kids':
					setTitle('Infantil')
					break
				}
				setLoading(false)
				return
			}

			instanceAxios.get(`/products/${params.page}`).then((data) => setData(data.data[0].products))
			setLoading(false)

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function SearchByFilter(params: Readonly<Params<string>>){
		const controller = new AbortController()

		try {
			if(filter != '') {
				instanceAxios.get(`/products/category-filter/type/${params.page}/${params.query}/${filter}`).then((data) => setData(data.data[0]))
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	return(
		<ProductsPageContext.Provider value={{  
			title,
			data,
			filter,
			loading,
			FetchData,
			SearchByFilter,
			setFilter,
			setLoading
		}}>
			{children}
		</ProductsPageContext.Provider>
	)
}

export const useProductsPageContext = () => useContext(ProductsPageContext)