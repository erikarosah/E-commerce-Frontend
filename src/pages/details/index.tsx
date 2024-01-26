import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import * as S from './style'
import { useEffect, useState } from 'react'
import { Sizes } from '../../components/sizes'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'
import { instanceAxios } from '../../helper/instanceAxios'
import { ProductProps } from '../../context/productsContext'

export function Details() {
	const params = useParams()
	const [ data, setData ] = useState<ProductProps>({} as ProductProps)

	async function FetchData() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get(`/product/${params.id}`).then((data) => setData(data.data[0]))
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	useEffect(() => {
		FetchData()
	},[params])
	return (
		<>
			<Header/>
			<S.Container >
				<S.Image
					src={data.image}
					alt={data.name}
				/>
				<S.Content>
					<S.Prices>
						<h2>{data.name}</h2>
						<span>
							{new Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							}).format(data.price)}
						</span>
						<span className='old_price'>
							{new Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: 'BRL'
							}).format(data.old_price)}
						</span>
					</S.Prices>
					<S.Sizes>
						<span>tamanhos</span>
						<div>
							{
								data.sizes? data.sizes.map((item, index) => (
									<Sizes
										key={index}
										size={item}
									/>
								)) : ''
							}
						</div>
					</S.Sizes>
					<S.Button>
						Adicionar ao carrinho
					</S.Button>
					<h3>Vendido e entregue por lojas <span>Be You</span></h3>
					<h3>Curtiu? Compartilhe essa peça
						<IoLogoWhatsapp/>
						<FaFacebook/>
						<FaPinterest/>
					</h3>
					<S.Freight>
						<span>Calcular frete</span>
						<div>
							<input
								placeholder='Digite seu CEP'
							/>
							<button>OK</button>
						</div>
					</S.Freight>
				</S.Content>
			</S.Container>
		</>
	)
}