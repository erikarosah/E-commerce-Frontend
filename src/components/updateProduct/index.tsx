import * as S from './style'
import { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { LoadingCard } from '../loadingCard'
import { instanceAxios } from '../../helper/instanceAxios'
import { useProductsContext } from '../../context/productsContext'

export function UpdateProduct() {
	const params = useParams()
	const [ name, setName ] = useState('')
	const [ image, setImage ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ available, setAvailable ] = useState('')
	const [ price, setPrice] = useState('')
	const [ old_price, setOldPrice] = useState('')
	const [ sizes, setSizes] = useState('')
	const [ erro, setErro] = useState('')
	const [ loading, setLoading] = useState(true)

	const {
		UpdateProduct
	} = useProductsContext()

	function Verify(e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
		if(name === '' || 
			image === '' ||
			category === '' ||
			price === '' || 
			old_price === '' || 
			sizes === '' || 
			available === ''
		) {
			e.preventDefault()
			setErro('Preencha todos os campos')
			return
		}

		UpdateProduct(
			params,
			name,
			image,
			category,
			price,
			old_price,
			sizes,
			available
		)
	}

	function GetProduct(params: Readonly<Params<string>>) {
		const controller = new AbortController()
   
		try {
			instanceAxios.get(`/product/${params.id}`)
				.then((data) => {
					setName(data.data[0].name)
					setImage(data.data[0].image)
					setCategory(data.data[0].category)
					setPrice(data.data[0].price)
					setOldPrice(data.data[0].old_price)
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

	useEffect(() => {
		GetProduct(params)
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
				onChange={(e) => setOldPrice(e.target.value.replace(',','.'))}
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
			<button onClick={(e) => Verify(e)}>
                Atualizar
			</button>
		</S.Form>
	)
}