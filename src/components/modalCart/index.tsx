import * as S from './style'
import { Buttons } from '../buttons'
import { useCartContext } from '../../context/cartContext'

export function ModalCart() {
	const {
		allProducts,
		total,
		openModal,
		MakePayment
	} = useCartContext()
	
	return (
		<S.Modal openmodal={openModal}>
			{
				allProducts? allProducts.map((item) => (
					<div key={item.id}>
						<img
							src={item.image}
							alt={item.name}
						/>
						<p>{item.name}</p>
						
						<Buttons
							id={item.id}
							price={item.price}
							quantity={item.quantity}
							item={item}
						/>
					</div>
				)): ''
			}
			<S.Total>
					Total: {total.toFixed(2).replace('.',',')}
			</S.Total>
			{
				allProducts.length >= 1 ?
					<button onClick={MakePayment}>Pagar</button>
					:''
			}
		</S.Modal>
	)
}





