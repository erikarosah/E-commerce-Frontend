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

	function SearchByFilter(params: Readonly<Params<string>>){
		setLoading(true)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		const controller = new AbortController()

		if(params.category && params.query) {
			try {
				instanceAxios.get(`/products/${params.query}/${params.category}`)
					.then((data) => {
						setData(data.data[0])
						setLoading(false)
					})
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})
			} catch (error) {
				console.log(error)
				controller.abort()
			}

			switch(params.category) {
			case 'fem': 
				setTitle(`${params.query.toUpperCase()} | FEMININO`)
				break
			case 'masc': 
				setTitle(`${params.query.toUpperCase()} | MASCULINO `)
				break
			case 'kids':
				setTitle(`${params.query.toUpperCase()} | INFANTIL`)
				break
			}
			return
		}

		if(params.query){
			try {
				instanceAxios.get(`/products/name/${params.query}`)
					.then((data) => {
						setData(data.data[0])
						setLoading(false)
					})
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})

				setTitle(params.query.toUpperCase())
			}catch (error) {
				console.log(error)
				controller.abort()
			}

			return
		}
		
		if(params.category){
			try {
				instanceAxios.get(`/products/${params.category}`)
					.then((data) => {
						setData(data.data[0])
						setLoading(false)
					})
					.catch(() => {
						alert('Ocorreu um erro, por favor tente novamente mais tarde')
						window.location.href='/'
					})
				switch(params.category) {
				case 'fem': 
					setTitle('FEMININO')
					break
				case 'masc': 
					setTitle('MASCULINO')
					break
				case 'kids':
					setTitle('INFANTIL')
					break
				}
				return
			}catch (error) {
				console.log(error)
				controller.abort()
			}

			return
		}

		instanceAxios.get('/products')
			.then((data) => {
				setData(data.data[0])
				setTitle('Todos os produtos')
				setLoading(false)
			})
			.catch(() => {
				alert('Ocorreu um erro, por favor tente novamente mais tarde')
				window.location.href='/'
			})
	}

	return(
		<ProductsPageContext.Provider value={{  
			title,
			data,
			filter,
			loading,
			page,
			setPage,
			SearchByFilter,
			setFilter,
			setLoading
		}}>
			{children}
		</ProductsPageContext.Provider>
	)
}

export const useProductsPageContext = () => useContext(ProductsPageContext)