import * as S from './style'
import { useEffect, useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import { ProductCartProps } from '../../context/productsContext'

interface ButtonsProps {
	id: string,
    price: number,
	quantity?: number,
	item: ProductCartProps
}

export function Buttons(props : ButtonsProps){
	const [ price, setPrice ] = useState(props.price)
	const [ totalAdded, setTotalAdded ] = useState(1)

	const {
		openModal,
		allProducts,
		Sum,
		Subtraction,
		RemoveToCart,
	} = useCartContext()

	function handleAdd() {
		if(price === props.price) {
			setPrice(price * 2)
			setTotalAdded((prev) => prev + 1)
			Sum(props.price)

		}else {
			setPrice(price + props.price)
			setTotalAdded((prev) => prev + 1)
			Sum(props.price)
		}
	}

	function handleSub() {
		if (totalAdded === 1) {
			RemoveToCart(props.id)
		}

		setPrice(price - props.price)
		setTotalAdded(totalAdded - 1)
		Subtraction(props.price)
	}

	useEffect(() => {
		Object.assign(props.item, {quantity: totalAdded})
		const index = allProducts.findIndex((item) => item.id === props.id)
		allProducts.splice(index, 1, props.item)

	},[totalAdded])

	return (
		<S.Container openmodal={openModal}>
			<span>{price.toFixed(2).replace('.',',')}</span>
			<button onClick={handleAdd}>+</button>
			<span>{totalAdded}</span>
			<button onClick={handleSub}>-</button>
		</S.Container>
	)
}


