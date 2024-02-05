import * as S from './style'
import { Header } from '../../components/header'
import { Link, Outlet } from 'react-router-dom'

export function Manager() {
	return (
		<>
			<Header/>
			<S.Container >
				<S.SideMenu>
					<ul>
						<Link to='/manager/all'>
							<li>
								Todos os produtos
							</li>
						</Link>
						<Link to='/manager/unavailable'>
							<li>
								Produtos em falta
							</li>
						</Link>
						<Link to='/manager/register'>
							<li>
								Registrar produto
							</li>
						</Link>
					</ul>
				</S.SideMenu>
				<S.Products>
					<h1>Gerencie seus produtos aqui</h1>
					<Outlet/>
				</S.Products>
			</S.Container>
		</>
	)
}
