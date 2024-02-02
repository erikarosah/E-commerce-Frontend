import { useState } from 'react'
import * as S from './style'
import { instanceAxios } from '../../helper/instanceAxios'

export function RegisterProduct() {
	const [ name, setName ] = useState('')
	const [ image, setImage ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ price, setPrice] = useState('')
	const [ old_price, setOldPrice] = useState('')
	const [ sizes, setSizes] = useState('')
	const [ erro, setErro] = useState('')

	function Verify(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,) {
		if(
			name === '' || 
			sizes === ''||
			image === '' || 
			price === '' || 
			category === '' ||
			old_price === '' 
		) {

			e.preventDefault()
			setErro('Preencha todos os campos')
			return
		}

		Register(e)
	}
	
	function Register(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault()
		const controller = new AbortController()
		
		try {
			
			instanceAxios.post('/products', {
				name: name,
				image: image,
				category: category,
				price: price,
				old_price: old_price,
				sizes: sizes.toUpperCase().replace( /[^a-zA-Z0-9]/g, '').split(''),
				available: 'true'
			}).then(() => window.location.href='/manager/all')
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
				
		} catch (error) {
			console.log(error)
			controller.abort()
		}	
	}

	return(
		<S.Form>
			{
				erro? 
					<h3 className='message-erro'>Por favor, preencha todos os dados</h3>
					: 
					<h3>Insira as informações do produto</h3>
			}
			<input 
				placeholder='Nome'
				type='text'
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				placeholder='Imagem (URL)'
				type='text'
				onChange={(e) => setImage(e.target.value)}
			/>
			<input
				placeholder='Categoria (FEM, MASC, KIDS)'
				type='text'
				onChange={(e) => setCategory(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Preço atual'
				onChange={(e) => setPrice(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Preço antigo'
				onChange={(e) => setOldPrice(e.target.value)}
			/>
			<input
				placeholder='Tamanhos (P, M, G)'
				type='text'
				onChange={(e) => setSizes(e.target.value)}
			/>
			<button onClick={(e) => Verify(e)}>
				Criar
			</button>
		</S.Form>
	)
}
