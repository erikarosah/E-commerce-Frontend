import * as S from './style'
import { instanceAxios } from '../../helper/instanceAxios'
import { LoadingCard } from '../loadingCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function UpdateProduct() {
	const params = useParams()
	const [ loading, setLoading ] = useState(true)
	const [ name, setName ] = useState('')
	const [ image, setImage ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ price, setPrice] = useState('')
	const [ old_price, setOld_price] = useState('')
	const [ sizes, setSizes] = useState('')
	const [ available, setAvailable] = useState('')
	const [ erro, setErro] = useState('')

	function GetProduct() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get(`/product/${params.id}`)
				.then((data) => {
					setName(data.data[0].name)
					setImage(data.data[0].image)
					setCategory(data.data[0].category)
					setPrice(data.data[0].price)
					setOld_price(data.data[0].old_price)
				}) 
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function UpdateProduct(e : any) {
		if(name === '' || image === '' || category === '' ||
		price === '' || old_price === '' || sizes === '' || available === '') {
			e.preventDefault()
			setErro('Preencha todos os campos')
			return
		}
		const controller = new AbortController()
		e.preventDefault()
		try {
			instanceAxios.put(`/product/${params.id}`, {
				name,
				image,
				category,
				price,
				old_price,
				available,
				sizes: sizes.toUpperCase().replace( /[^a-zA-Z0-9]/g, '').split('')
			})
				.then(() => window.location.href='/manager/all')
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)

		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	useEffect(() => {
		GetProduct()
	},[])

	if(loading) {
		return (
			<LoadingCard/>
		)
	}
	return (
		<S.Form>
			<input 
				value={name}
				placeholder='Nome'
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				value={image}
				placeholder='Imagem (URL)'
				onChange={(e) => setImage(e.target.value)}
			/>
			<input
				value={category}
				placeholder='Categoria (FEM, MASC, KIDS)'
				onChange={(e) => setCategory(e.target.value)}
			/>
			<input
				value={price}
				placeholder='Preço atual'
				onChange={(e) => setPrice(e.target.value.replace(',','.'))}
			/>
			<input
				value={old_price}
				placeholder='Preço antigo'
				onChange={(e) => setOld_price(e.target.value.replace(',','.'))}
			/>
			<input
				placeholder='Tamanhos (P, M, G)'
				onChange={(e) => setSizes(e.target.value)}
			/>
			<h3>Disponível?</h3>
			<div>
				<input type='radio' name='available' id='True'
					onClick={() => setAvailable('true')}
				/>
				<label htmlFor='True'>Sim</label><br/>
				<input type='radio' name='available' id='False'
					onClick={() => setAvailable('false')}
				/>
				<label htmlFor='False'>Não</label>
			</div>
			{
				erro? 
					<h3 className='message-erro'>Por favor, preencha todos os dados</h3>
					: 
					''
			}
			<button onClick={(e) => UpdateProduct(e)}>
                Atualizar
			</button>
		</S.Form>
	)
}