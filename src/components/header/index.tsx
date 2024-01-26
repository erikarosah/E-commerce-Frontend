import * as S from './style'
import CartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'

export function Header(){
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
				<S.ButtonLogin>
                    Login
				</S.ButtonLogin>

				<S.Cart
					src={CartImage}
					alt='shopping cart'
				/>
			</div>
		</S.Container>
	)
}


