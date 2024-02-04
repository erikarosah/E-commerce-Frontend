import * as S from './style'
import CartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { FaGear } from 'react-icons/fa6'
import { useProductsPageContext } from '../../context/productsPageContext'
import { useCartContext } from '../../context/cartContext'
import { useEffect } from 'react'
import { Buttons } from '../buttons'
import { instanceAxios } from '../../helper/instanceAxios'

export function Header(){
	const {
		isAnimated,
		allProducts,
		products,
		total,
		openModal,
		setOpenModal,
		setAllProducts
	} = useCartContext()
	
	const { 
		setPage
	} = useProductsPageContext()

	function handleLogout() {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		localStorage.removeItem('role')
		localStorage.removeItem('products')
		location.reload()
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

	useEffect(() => {
		if(products){
			const data = JSON.parse(products)
			setAllProducts(data)
		}
	},[products])

	return (
		<S.Container>
			<Link to='/'>
				<S.Logo>
					<h1>Be you</h1>
				</S.Logo>
			</Link>

			<S.Section>
				<Link to='/'>
					<S.Items>Shop</S.Items>
				</Link>
				<Link to='/products/fem'>
					<S.Items
						onClick={() => setPage(1)}
					>Feminino
					</S.Items>
				</Link>
				<Link to='/products/masc'>
					<S.Items
						onClick={() => setPage(1)}
					>Masculino
					</S.Items>
				</Link>
				<Link to='/products/kids'>
					<S.Items
						onClick={() => setPage(1)}
					>Infantil
					</S.Items>
				</Link>
			</S.Section>

			<div>
				{
					localStorage.getItem('user') ?
						<h3>
							Olá, {localStorage.getItem('user')?.split(' ')[0]} | <span onClick={handleLogout}>Sair</span>
						</h3>
						:
						<Link to='/session'>
							<S.ButtonLogin>
								Login
							</S.ButtonLogin>
						</Link>
				}
				{
					localStorage.getItem('role') === 'ADMIN'?
						<Link to='/manager/all'>
							<FaGear/>
						</Link>
						: 
						<S.Cart
							onClick={() => setOpenModal(!openModal)}
							src={CartImage}
							alt='shopping cart'
							className={isAnimated ? 'animated' : ''}
						/>
				}
			</div>
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
				<button onClick={MakePayment}>Pagar</button>
			</S.Modal>
		</S.Container>
	)
}


