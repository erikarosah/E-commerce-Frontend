import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
    login: boolean,
    name: string,
    email: string,
    password: string,
    erro: string,
    handleRegister: (e: any, typeRole: string) => void,
    handleLogin: (e: any) => void,
    handleInputs: () => void,
	setName:(name: string) => void,
	setEmail:(email: string) => void,
	setPassword:(password: string) => void,
}

const SessionContext = createContext<ContextProps>({} as ContextProps)

export function SessionContextProvider({children}: ChildrenProps){
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

	return(
		<SessionContext.Provider value={{  
			login,
			name,
			email,
			password, 
			erro,
			handleRegister,
			handleLogin,
			handleInputs,
			setEmail,
			setName,
			setPassword
		}}>
			{children}
		</SessionContext.Provider>
	)
}

export const useSessionContext = () => useContext(SessionContext)