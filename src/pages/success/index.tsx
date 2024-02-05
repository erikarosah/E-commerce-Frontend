import * as S from './style'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

export function Success() {	
	return (
		<S.Container >
			<h1>Sua compra foi realizada com sucesso!</h1>
			<FaCheckCircle/>
			<Link to='/'>
                    Voltar para página inicial
			</Link>
		</S.Container>

	)
}
