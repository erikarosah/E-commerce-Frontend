import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import * as S from './style'
import { useEffect, useState } from 'react'
import { instanceAxios } from '../../helper/instanceAxios'
import { ProductProps } from '../../context/productsContext'
import { Card } from '../../components/card'

export function Products() {
	const params = useParams()
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ title, setTitle ] = useState('')

	async function FetchData() {
		const controller = new AbortController()
	
		try {
			if(params.query) {
				instanceAxios.get(`/products/name/${params.page}/${params.query}`).then((data) => setData(data.data[0]))
				setTitle(params.query.toUpperCase())
				return
			}
			if(params.category) {
				instanceAxios.get(`/products/category/${params.page}/${params.category}`).then((data) => setData(data.data[0]))
				switch(params.category) {
				case 'fem': 
					setTitle('Feminino')
					break
				case 'masc': 
					setTitle('Masculino')
					break
				case 'kids':
					setTitle('Infantil')
					break
				}
				return
			}
			instanceAxios.get(`/products/${params.page}`).then((data) => setData(data.data[0].products))
			
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
			< S.Container >
				<h1>Confira seus resultados para: {title}</h1>
				<S.Content>	
					{
						data.map((item) => (
							<Card
								key={item.id}
								img={item.image}
								name={item.name}
								price={item.price}
								old_price={item.old_price}
							/>
						))
					} 
				</S.Content>
			</S.Container>
		</>
	)
}
