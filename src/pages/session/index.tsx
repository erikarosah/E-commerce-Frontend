import { Header } from '../../components/header'
import * as S from './style'
import { PiBagSimpleFill } from 'react-icons/pi'
import { FaUser } from 'react-icons/fa6'
import { useSessionContext } from '../../context/sessionContext'

export function Session() {
	const {
		login, 
		erro,
		email,
		name,
		password,
		HandleInputs,
		HandleRegister,
		HandleLogin,
		setName,
		setEmail,
		setPassword,
		setErro,
	} = useSessionContext()

	function VerifyLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		if(email === '' || password === ''){
			e.preventDefault()
			setEmail('')
			setPassword('')
			setName('')
			setErro('Insira todos os dados')
			return
		}

		HandleLogin(e)
	}
	
	function VerifyRegister(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		role: string

	) {
		if(name === '' || email === '' || password === ''){
			e.preventDefault()
			setEmail('')
			setPassword('')
			setName('')
			setErro('Insira todos os dados')
			return
		}

		HandleRegister(e, role)
	}

	return (
		<>
			<Header/>
			<S.Container >
				<S.Content>
					<h2>
						{
							login?
								'Login'
								:
								'Registar'
						}
					</h2>
					{
						erro? 
							<h3 className='message-erro'>
								{erro}
							</h3> 
							: ''
					}
					{
						login?
							<>
								<input 
									value={email}
									type='email'
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email'
									className={erro? 'input-erro' : 'input-normal'}
								/>
								<input
									value={password}
									type='password'
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Senha'
									className={erro? 'input-erro' : 'input-normal'}
								/>
							</>
							:
							<>
								<input 
									value={name}
									autoComplete='username'
									onChange={(e) => setName(e.target.value)}
									placeholder='Nome'
									className={erro? 'input-erro' : 'input-normal'}
								/>
								<input 
									value={email}
									type='email'
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email'
									className={erro? 'input-erro' : 'input-normal'}
								/>
								<input
									value={password}
									type='password'
									autoComplete='current-password'
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Senha (mínimo 6 dígitos)'
									className={erro? 'input-erro' : 'input-normal'}
								/>
							</>
					}
					
					{
						login?
							<button onClick={(e) => VerifyLogin(e)}>
								Entrar
							</button>
							:
							<>
								<h2>Criar conta como</h2>
								<S.Buttons>
									<button onClick={(e) => VerifyRegister(e, 'ADMIN')}>
										Admin
										<PiBagSimpleFill/>
									</button>
									<button onClick={(e) => VerifyRegister(e, 'USER')}>
										Cliente
										<FaUser/>
									</button>
								</S.Buttons>
							</>
					}

					<span onClick={HandleInputs}>
						{
							login?
								'Não possui conta? Registre-se'
								:
								'Já possui conta? Faça login'
						}
					</span>
				</S.Content>
			</S.Container>
		</>
	)
}
