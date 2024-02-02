import { useContext, useState, createContext } from 'react'
import { instanceAxios } from '../helper/instanceAxios'

interface ChildrenProps {
    children: React.ReactNode;
}  

interface ContextProps {
    login: boolean,
	name: string,
    erro: string,
    email: string,
    password: string,
    HandleInputs: () => void,
    HandleLogin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	setName:(value: string) => void,
	setEmail:(value: string) => void,
	setPassword:(value: string) => void,
	setErro:(value: string) => void,
    HandleRegister: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>, typeRole: string) => void,
}

const SessionContext = createContext<ContextProps>({} as ContextProps)

export function SessionContextProvider({children}: ChildrenProps){
	const [ login, setLogin ] = useState(true)
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ role, setRole ] = useState('')
	const [ erro, setErro ] = useState('')
	const [ password, setPassword ] = useState('')

	function HandleRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, typeRole: string){
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
				setErro('Verifique seus dados novamente e utilize um e-mail disponível')
				setEmail('')
				setPassword('')
				setName('')
			})

		} catch(error) {
			console.log(error)
			controller.abort()
		}
	}

	function HandleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
				history.back()
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

	function HandleInputs() {
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
			HandleRegister,
			HandleLogin,
			HandleInputs,
			setEmail,
			setName,
			setPassword,
			setErro
		}}>
			{children}
		</SessionContext.Provider>
	)
}

export const useSessionContext = () => useContext(SessionContext)