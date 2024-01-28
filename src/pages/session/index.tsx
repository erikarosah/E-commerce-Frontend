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
		handleInputs,
		handleRegister,
		handleLogin,
		setName,
		setEmail,
		setPassword
	} = useSessionContext()

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
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Senha'
									className={erro? 'input-erro' : 'input-normal'}
								/>
							</>
					}
					
					{
						login?
							<button onClick={(e) => handleLogin(e)}>
								Entrar
							</button>
							:
							<>
								<h2>Entrar como</h2>
								<S.Buttons>
									<button onClick={(e) => handleRegister(e, 'ADMIN')}>
										Admin
										<PiBagSimpleFill/>
									</button>
									<button onClick={(e) => handleRegister(e, 'USER')}>
										Cliente
										<FaUser/>
									</button>
								</S.Buttons>
							</>
					}

					<span onClick={handleInputs}>
						{
							login?
								'Não possui conta? Registrar-se'
								:
								'Já possui conta? Fazer login'
						}
					</span>
				</S.Content>
			</S.Container>
		</>
	)
}
