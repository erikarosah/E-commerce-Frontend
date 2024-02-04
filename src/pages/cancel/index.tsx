import { Link } from 'react-router-dom'
import * as S from './style'
import { MdError } from 'react-icons/md'

export function Cancel() {	
	return (
		<S.Container >
			<h1>Sua compra foi cancelada!</h1>
			<MdError/>
			<Link to='/'>
                    Voltar para página inicial
			</Link>
		</S.Container>

	)
}
