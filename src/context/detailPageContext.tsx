import { useContext, useState, createContext, ChangeEvent } from 'react'
import { instanceAxios } from '../helper/instanceAxios'
import { ProductProps } from './productsContext'
import { Params } from 'react-router-dom'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
	value: boolean,
	freight: boolean,
    data: ProductProps,
    openMenu: boolean,
    ShowValue: () => void
    setOpenMenu: (value: boolean) => void
    FetchData: (params: Readonly<Params<string>>) => void,
    HandleFreight: (e: ChangeEvent<HTMLInputElement>, cep: string) => void,
}

const DetailPageContext = createContext<ContextProps>({} as ContextProps)

export function DetailPageContextProvider({children}: ChildrenProps){
	const [ data, setData ] = useState<ProductProps>({} as ProductProps)
	const [ freight, setFreight ] = useState(false)
	const [ value, setValue ] = useState(false)
	const [ openMenu, setOpenMenu ] = useState(false)

	async function FetchData(params: Readonly<Params<string>>) {
		const controller = new AbortController()
	
		try {
			instanceAxios.get(`/product/${params.id}`)
				.then((data) => setData(data.data[0]))
				.catch(() => {
					window.location.href='/notfound'
				})

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function HandleFreight(e: ChangeEvent<HTMLInputElement>, cep: string) {
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
		<DetailPageContext.Provider value={{  
			data,
			value,
			freight,
			openMenu,
			setOpenMenu,
			FetchData,
			ShowValue,
			HandleFreight
		}}>
			{children}
		</DetailPageContext.Provider>
	)
}

export const useDetailPageContext = () => useContext(DetailPageContext)