import { useState } from 'react'
import * as S from './style'
import { useCartContext } from '../../context/cartContext'

interface ButtonsProps {
    price: number,
    id: string
}

export function Buttons(props : ButtonsProps){
	const [ totalAdded, setTotalAdded ] = useState(1)
	const [ price, setPrice ] = useState(props.price)
	const {
		openModal,
		Sum,
		Subtraction,
		RemoveToCart
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
		setTotalAdded((prev) => prev - 1)
		Subtraction(props.price)
	}

	return (
		<S.Container openmodal={openModal}>
			<span>{price.toFixed(2).replace('.',',')}</span>
			<button onClick={handleAdd}>+</button>
			<span>{totalAdded}</span>
			<button onClick={handleSub}>-</button>
		</S.Container>
	)
}


