import * as S from './style'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductsPageContext } from '../../context/productsPageContext'
import { useCartContext } from '../../context/cartContext'
import { MenuMobile } from '../menuMobile'
import { FaGear } from 'react-icons/fa6'
import { IoIosMenu } from 'react-icons/io'
import CartImage from '../../assets/cart.png'
import { ModalCart } from '../modalCart'
import { useDetailPageContext } from '../../context/detailPageContext'

export function Header(){
	const {
		isAnimated,
		allProducts,
		products,
		total,
		openModal,
		setOpenModal,
		setAllProducts,
		MakePayment
	} = useCartContext()
	
	const { 
		setPage,
	} = useProductsPageContext()

	const { 
		openMenu, 
		setOpenMenu
	} = useDetailPageContext()

	function handleLogout() {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		localStorage.removeItem('role')
		localStorage.removeItem('products')
		window.location.href='/'
	}
	
	useEffect(() => {
		if(products){
			const data = JSON.parse(products)
			setAllProducts(data)
		}
	},[products])

	return (
		<S.Container>
			<IoIosMenu onClick={() => setOpenMenu(!openMenu)}/>
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
			<MenuMobile/>
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
			<ModalCart/>
		</S.Container>
	)
}


