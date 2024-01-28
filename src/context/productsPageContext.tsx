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
	page: number,
    FetchData: (params: Readonly<Params<string>>) => void,
    SearchByFilter: (params: Readonly<Params<string>>) => void,
    setFilter: (value: string) => void,
	setLoading: (value: boolean) => void,
	setPage: (value: number ) => void
}

const ProductsPageContext = createContext<ContextProps>({} as ContextProps)

export function ProductsPageContextProvider({children}: ChildrenProps){
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ title, setTitle ] = useState('')
	const [ filter, setFilter ] = useState('')
	const [ loading, setLoading ] = useState(true)
	const [ page, setPage ] = useState(1)

	
	async function FetchData(params: Readonly<Params<string>>) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		const controller = new AbortController()

		try {
			if(params.query) {
				instanceAxios.get(`/products/name/${page}/${params.query}`)
					.then((data) => setData(data.data[0]))
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})
				setTitle(params.query.toUpperCase())
				setLoading(false)
				return
			}

			if(params.category) {
				instanceAxios.get(`/products/category/${page}/${params.category}`)
					.then((data) => setData(data.data[0]))
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})
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

			instanceAxios.get(`/products/${page}`)
				.then((data) => setData(data.data[0].products))
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

	function SearchByFilter(params: Readonly<Params<string>>){
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})

		const controller = new AbortController()

		try {
			if(filter != '') {
				instanceAxios.get(`/products/category-filter/type/${page}/${params.query}/${filter}`)
					.then((data) => setData(data.data[0]))
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})
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
			page,
			setPage,
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