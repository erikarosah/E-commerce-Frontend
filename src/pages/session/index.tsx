import { Header } from '../../components/header'
import * as S from './style'
import { PiBagSimpleFill } from 'react-icons/pi'
import { FaUser } from 'react-icons/fa6'
import { useState } from 'react'
import { instanceAxios } from '../../helper/instanceAxios'

export function Session() {
	const [ login, setLogin ] = useState(true)
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ role, setRole ] = useState('')

	function handleRegister(e: any, typeRole: string){
		e.preventDefault()
		setRole(typeRole)
		
		const controller = new AbortController()
	
		try {
			instanceAxios.post('/users', {
				name,
				email,
				password,
				role
			}).then()
			setPassword('')
			setLogin(true)
		} catch (error) {
			window.location.href='/session'
			console.log(error)
			controller.abort()
		}
		
	}

	function handleLogin(e: any) {
		e.preventDefault()
		
		const controller = new AbortController()

		try {
			instanceAxios.post('/users/session', {
				email,
				password
			}).then((data) => {
				localStorage.setItem('token', data.data.token)
				localStorage.setItem('user', data.data.user)
			})

			setLogin(true)
			window.location.href='/'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
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
						login?
							<>
								<input 
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email'
								/>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Senha'
								/>
							</>
							:
							<>
								<input 
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder='Nome'
								/>
								<input 
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email'
								/>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Senha'
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

					<span onClick={() => setLogin(!login)}>
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
