import { useState } from 'react'
import { instanceAxios } from '../../helper/instanceAxios'
import * as S from './style'

export function RegisterProduct() {
	const [ name, setName ] = useState('')
	const [ image, setImage ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ price, setPrice] = useState('')
	const [ old_price, setOld_price] = useState('')
	const [ sizes, setSizes] = useState('')

	function HandleProduct(e: any) {
		e.preventDefault()
		const controller = new AbortController()
	
		try {
			instanceAxios.post('/products', {
				name: name,
				image: image,
				category: category,
				price: price.replace(',','.'),
				old_price: old_price.replace(',','.'),
				sizes: [sizes.toUpperCase()],
				available: 'true'
			}).then()
			
			window.location.href='/manager/all'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	return(
		<S.Form>
			<input 
				placeholder='Nome'
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				placeholder='Imagem (URL)'
				onChange={(e) => setImage(e.target.value)}
			/>
			<input
				placeholder='Categoria (FEM, MASC, KIDS)'
				onChange={(e) => setCategory(e.target.value)}
			/>
			<input
				placeholder='Preço atual'
				onChange={(e) => setPrice(e.target.value)}
			/>
			<input
				placeholder='Preço antigo'
				onChange={(e) => setOld_price(e.target.value)}
			/>
			<input
				placeholder='Tamanhos (P, M, G , GG)'
				onChange={(e) => setSizes(e.target.value)}
			/>
			<button onClick={(e) => HandleProduct(e)}>
				Criar
			</button>
		</S.Form>
	)
}
