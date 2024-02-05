import * as S from './style'
import { Link } from 'react-router-dom'

export function NotFound() {	
	return (
		<S.Container >
			<h1>Não encontramos resultados para sua solicitação</h1>
			<Link to='/'>
                    Voltar para página inicial
			</Link>
		</S.Container>

	)
}
