import { useContext, useState, createContext } from 'react'
import { ProductProps } from './homePageContext'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface CartContextProps {
    added: number,
	isAnimated: boolean,
	openModal: boolean,
	allProducts: ProductProps[],
	products: string | null,
	total: number,
    setAdded: (value: number) => void,
    setOpenModal: (value: boolean) => void,
    AddToCart: (data: ProductProps) => void,
	StartAnimation: () => void,
	setAllProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>,
	Sum: (value: number) => void
	Subtraction: (value: number) => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export function CartContextProvider({children}: ChildrenProps){
	const [ added, setAdded ] = useState(0)
	const [ isAnimated, setAnimated ] = useState(false)
	const [ openModal, setOpenModal ] = useState(false)
	const [ allProducts, setAllProducts ] = useState<ProductProps[]>([])

	const products = localStorage.getItem('products')

	const Total = () => {
		if(products && products?.length >= 1){
			const arr: ProductProps[] = JSON.parse(products) || []
			const prices = arr.map((item) => {
				return item.price
			})
	
			const newSum = prices.reduce(function (a, b) {
				return a + b
			}, 0)

			return newSum 
		}
		return 0
	}

	const [ total, setTotal] = useState(Total())

	function StartAnimation() {
		setAnimated(true)
		setTimeout(() => setAnimated(false), 1000)
	}

	const AddToCart = (data: ProductProps) => {
		if(!localStorage.getItem('user')) {
			window.location.href='/session'
			return
		}

		if(products) {
			const oldArray: ProductProps[] = JSON.parse(products) || []
			const productAlreadyAdded = oldArray.find((item) => item.id === data.id)

			if(productAlreadyAdded) {
				return
			}
			
			const updatedArray = [...oldArray, data]
			localStorage.setItem('products', JSON.stringify(updatedArray))

			const prices = updatedArray.map((item) => {
				return item.price
			})
			const newTotal = prices.reduce(function (a, b) {
				return a + b
			}, 0)

			setTotal(newTotal) 
			StartAnimation()
			
			return setAllProducts(updatedArray)
		}

		localStorage.setItem('products', JSON.stringify([data]))
		StartAnimation()
	} 

	function Sum(number: number) {
		setTotal(prev => prev + number)
	}

	function Subtraction(number: number) {
		setTotal(prev => prev - number)
	}

	return(
		<CartContext.Provider value={{  
			added,
			isAnimated,
			allProducts,
			total,
			products,
			openModal,
			setOpenModal,
			Sum,
			Subtraction,
			setAdded,
			AddToCart,
			StartAnimation,
			setAllProducts,
		}}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => useContext(CartContext)