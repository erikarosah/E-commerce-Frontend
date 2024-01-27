import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import * as S from './style'
import { useEffect } from 'react'
import { Card } from '../../components/card'
import { useProductsPageContext } from '../../context/productsPageContext'
import { LoadingCard } from '../../components/loadingCard'

export function Products() {
	const params = useParams()
	const { 
		data,
		title,
		filter, 
		loading,
		setFilter,
		FetchData,
		SearchByFilter
	} = useProductsPageContext()
	
	useEffect(() => {
		FetchData(params)
	},[params])

	useEffect(() => {
		SearchByFilter(params)
	},[filter])

	if(loading) {
		return(
			<LoadingCard/>
		)
	}
	return (
		<>
			<Header/>
			<S.Container >
				<h1>Confira seus resultados para: {title ? title : 'Todos os produtos'}</h1>
				{
					params.category ? '' :
						<S.Filter>
							<span>Filtrar por:</span>
							<ul>
								<li onClick={() => setFilter('fem')}>
									Feminino
								</li>
								<li onClick={() => setFilter('masc')}>
									Masculino
								</li>
								<li onClick={() => setFilter('kids')}>
									Infantil
								</li>
							</ul>
						</S.Filter>
						
				}
		
				<S.Content>	
					{
						data.map((item) => (
							<Card
								key={item.id}
								id={item.id}
								img={item.image}
								name={item.name}
								price={item.price}
								old_price={item.old_price.toString().replace('.', ',')}
							/>
						))
					} 
				</S.Content>
			</S.Container>
		</>
	)
}
