import * as S from './style'
import CartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { FaGear } from 'react-icons/fa6'

export function Header(){
	function handleLogout() {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		localStorage.removeItem('role')
		location.reload()
	}
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
				<Link to='/products/category/1/fem'>
					<S.Items>Feminino</S.Items>
				</Link>
				<Link to='/products/category/1/masc'>
					<S.Items>Masculino</S.Items>
				</Link>
				<Link to='/products/category/1/kids'>
					<S.Items>Infantil</S.Items>
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
							src={CartImage}
							alt='shopping cart'
						/>
				}
			</div>
		</S.Container>
	)
}


