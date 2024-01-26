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
    FetchData: (params: Readonly<Params<string>>) => void,
    SearchByFilter: (params: Readonly<Params<string>>) => void,
    setFilter:(value: string) => void
}

const ProductsPageContext = createContext<ContextProps>({} as ContextProps)

export function ProductsPageContextProvider({children}: ChildrenProps){
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ title, setTitle ] = useState('')
	const [ filter, setFilter ] = useState('')

	async function FetchData(params: Readonly<Params<string>>) {
		const controller = new AbortController()
		
		try {
			if(params.query) {
				instanceAxios.get(`/products/name/${params.page}/${params.query}`).then((data) => setData(data.data[0]))
				setTitle(params.query.toUpperCase())
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

				return
			}

			instanceAxios.get(`/products/${params.page}`).then((data) => setData(data.data[0].products))

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
			FetchData,
			SearchByFilter,
			setFilter
		}}>
			{children}
		</ProductsPageContext.Provider>
	)
}

export const useProductsPageContext = () => useContext(ProductsPageContext)