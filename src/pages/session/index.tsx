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
	const [ erro, setErro ] = useState('')

	function handleRegister(e: any, typeRole: string){
		if(name === '' || email === '' || password === ''){
			e.preventDefault()
			setEmail('')
			setPassword('')
			setName('')
			setErro('Insira todos os dados')
			return
		}

		e.preventDefault()
		setRole(typeRole)
		
		const controller = new AbortController()
	
		try {
			instanceAxios.post('/users', {
				name,
				email,
				password,
				role
			}).then(() => {
				setPassword('')
				setLogin(true)
			}).catch (() => {
				setErro('Este email já esta sendo utilizado')
				setEmail('')
				setPassword('')
				setName('')
			})

		} catch(error) {
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
				localStorage.setItem('role', data.data.role)
				window.location.href='/'
				setLogin(true)

			}).catch(() => {
				setErro('Email e/ou senha inválidos')
				setEmail('')
				setPassword('')
				setName('')
			})

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function handleInputs() {
		setLogin(!login)
		setErro('')
		setEmail('')
		setPassword('')
		setName('')
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
							<h3>
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
