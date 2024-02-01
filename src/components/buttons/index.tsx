import { useState } from 'react'
import * as S from './style'
import { useCartContext } from '../../context/cartContext'
import { ProductProps } from '../../context/homePageContext'

interface ButtonsProps {
    price: number,
    id: string
}

export function Buttons(props : ButtonsProps){
	const [ totalAdded, setTotalAdded ] = useState(1)
	const [ price, setPrice ] = useState(props.price)

	const {
		products,
		openModal,
		allProducts,
		setAllProducts,
		Sum,
		Subtraction,
		setOpenModal
	} = useCartContext()

	function handleAdd(type: string) {
		if(type === 'add') {
			if(price === props.price) {
				setPrice(price * 2)
				setTotalAdded((prev) => prev + 1)
				Sum(props.price)
				return

			}else {
				setPrice(price + props.price)
				setTotalAdded((prev) => prev + 1)
				Sum(props.price)
				return
			}
		}

		if (totalAdded === 1) {
			RemoveProduct(props.id)
		}

		setPrice(price - props.price)
		setTotalAdded((prev) => prev - 1)
		Subtraction(props.price)

		if(allProducts.length === 1){
			setOpenModal(false)
		}
	}

	function RemoveProduct(id: string) {
		if(products) {
			const oldArray: ProductProps[] = JSON.parse(products) || []
			const index = oldArray.findIndex((item) => item.id === id)
			oldArray.splice(index, 1)

			const updatedArray = [...oldArray]
			localStorage.setItem('products', JSON.stringify(updatedArray))
			setAllProducts(updatedArray)
		}
	}

	return (
		<S.Container openmodal={openModal}>
			<span>{price.toFixed(2).replace('.',',')}</span>
			<button onClick={() => handleAdd('add')}>+</button>
			<span>{totalAdded}</span>
			<button onClick={() => handleAdd('sub')}>-</button>
		</S.Container>
	)
}


