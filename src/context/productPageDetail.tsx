import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'
import { ProductProps } from './productsContext'
import { Params } from 'react-router-dom'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
    data:  ProductProps,
	freight: boolean,
	value: boolean,
    FetchData: (params: Readonly<Params<string>>) => void,
    HandleFreight: (cep: string) => void,
    ShowValue: () => void
}

const ProductPageDetailContext = createContext<ContextProps>({} as ContextProps)

export function ProductPageDetailContextProvider({children}: ChildrenProps){
	const [ data, setData ] = useState<ProductProps>({} as ProductProps)
	const [ freight, setFreight ] = useState(false)
	const [ value, setValue ] = useState(false)

	async function FetchData(params: Readonly<Params<string>>) {
		const controller = new AbortController()
	
		try {
			instanceAxios.get(`/product/${params.id}`)
				.then((data) => setData(data.data[0]))
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function HandleFreight(cep: string) {
		setFreight(false)
		setValue(false)

		if(cep.length < 8) {
			return
		}

		setFreight(true)
	}

	function ShowValue() {
		setValue(true)
	}

	return(
		<ProductPageDetailContext.Provider value={{  
			data,
			freight,
			value,
			FetchData,
			HandleFreight,
			ShowValue
		}}>
			{children}
		</ProductPageDetailContext.Provider>
	)
}

export const useProductsPageDetailContext = () => useContext(ProductPageDetailContext)