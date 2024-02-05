import * as S from './style'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import { Sizes } from '../../components/sizes'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'
import { useCartContext } from '../../context/cartContext'
import { useDetailPageContext } from '../../context/detailPageContext'

export function Details() {
	const params = useParams()

	const {
		FetchData,
		HandleFreight,
		ShowValue,
		freight,
		data,
		value
	} =  useDetailPageContext()

	const {
		AddToCart
	} = useCartContext()

	function HandleFreightEnter(e?: React.KeyboardEvent<HTMLElement>) {	
		if (e?.key === 'Enter') {
			ShowValue()
		}
	}

	useEffect(() => {
		FetchData(params)
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
							{
								data.old_price ? data.old_price.toFixed(2).toString().replace('.', ',') : ''
							}
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
					<S.Button 
						onClick={() => AddToCart(data)}
					>
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
								type='number'
								onChange={(e) => HandleFreight(e, e.target.value)}
								onKeyDown={HandleFreightEnter}

							/>
							{
								freight? <button onClick={ShowValue}>
									OK
								</button>
									: ''	
							}

							<span className={value? 'active-span' : 'disable-span'}>R$ 20,00</span>
						</div>
					</S.Freight>
				</S.Content>
			</S.Container>
		</>
	)
}
