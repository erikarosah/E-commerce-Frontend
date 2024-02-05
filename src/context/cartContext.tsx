import { useContext, useState, createContext } from 'react'
import { ProductCartProps, ProductProps } from './productsContext'
import { instanceAxios } from '../helper/instanceAxios'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface CartContextProps {
	total: number,
	isAnimated: boolean,
	openModal: boolean,
	products: string | null,
	allProducts: ProductCartProps[],
	StartAnimation: () => void,
	Sum: (value: number) => void,
	Subtraction: (value: number) => void,
	RemoveToCart: (value: string) => void,
    setOpenModal: (value: boolean) => void,
    AddToCart: (data: ProductCartProps) => void,
	setAllProducts: React.Dispatch<React.SetStateAction<ProductCartProps[]>>,
	MakePayment:() => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export function CartContextProvider({children}: ChildrenProps){
	const [ isAnimated, setAnimated ] = useState(false)
	const [ openModal, setOpenModal ] = useState(false)
	const [ allProducts, setAllProducts ] = useState<ProductCartProps[]>([])

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

	const AddToCart = (data: ProductCartProps) => {
		if(!localStorage.getItem('user')) {
			window.location.href='/session'
			return
		}
		
		Object.assign(data, {quantity: 1})
		
		if(products) {
			const oldArray: ProductCartProps[] = JSON.parse(products) || []
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

	function RemoveToCart(id: string) {
		if(products) {
			const oldArray: ProductCartProps[] = JSON.parse(products) || []
			const index = oldArray.findIndex((item) => item.id === id)
			oldArray.splice(index, 1)

			const updatedArray = [...oldArray]
			localStorage.setItem('products', JSON.stringify(updatedArray))
			setAllProducts(updatedArray)
		}
	}

	function Sum(number: number) {
		setTotal(prev => prev + number)
	}

	function Subtraction(number: number) {
		setTotal(prev => prev - number)
	}

	const MakePayment = async () => {
		const data = allProducts.map((item) => ({
			name: item.name,
			image: item.image,
			price: item.price,
			quantity: item.quantity,
		}))
	
		try {
			instanceAxios.post('/create-checkout-session', {
				data,
			})
				.then((data) => window.location.href=`${data.data.url}`)
				.catch((error) => console.log(error))
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<CartContext.Provider value={{  
			total,
			products,
			openModal,
			isAnimated,
			allProducts,
			Sum,
			AddToCart,
			Subtraction,
			RemoveToCart,
			setOpenModal,
			StartAnimation,
			setAllProducts,
			MakePayment
		}}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => useContext(CartContext)