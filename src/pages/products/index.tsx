import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import * as S from './style'
import { useEffect } from 'react'
import { Card } from '../../components/card'
import { useProductsPageContext } from '../../context/productsPageContext'
import { LoadingCard } from '../../components/loadingCard'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'

export function Products() {
	const params = useParams()
	const { 
		data,
		page,
		title,
		loading,
		SearchByFilter,
		setPage,
	} = useProductsPageContext()

	function HandleSearchByFilter(value: string){
		window.location.href=`/products/${params.query}/${value}`
		SearchByFilter(params)
	}

	useEffect(() => {
		SearchByFilter(params)
	},[params])

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	},[page])
	
	if(loading) {
		return (<LoadingCard/>)
	}
		
	return (
		<>
			<Header/>
			<S.Container >
				<h1>Confira seus resultados para: {title}</h1>
				{
					params.category &&
					!params.query ? '' :
						<>
							{
								title != 'Todos os produtos' ?
									<S.Filter>
										<span>Filtrar por:</span>
										<ul>
											<li onClick={() => HandleSearchByFilter('fem')}>
									Feminino
											</li>
											<li onClick={() => HandleSearchByFilter('masc')}>
									Masculino
											</li>
											<li onClick={() => HandleSearchByFilter('kids')}>
									Infantil
											</li>
										</ul>
									</S.Filter>
									: ''
							}
						</>
				}
				<S.Content>	
					{
						data.slice((page - 1) * 10, page * 10).map((item) => (
							<Card
								key={item.id}
								id={item.id}
								img={item.image}
								name={item.name}
								price={item.price}
								old_price={item.old_price}
							/>
						))
					}
				</S.Content>
				<S.Buttons>
					{
						
						data.length <= 10 ?
							''
							:
							<>
								{
								
									page === 1 && data.length > page * 10 ?
										<button
											onClick={() => setPage(page + 1)}
											className='btn-right'
										>
											<FaChevronRight />
										</button>
									
										: 

										<>
											{
												data.length > page * 10 ?
													<>
														<button onClick={() => setPage(page - 1)}>
															<FaChevronLeft />
														</button>
														<button
															onClick={() => setPage(page + 1)}
															className='btn-right'
														>
															<FaChevronRight />
														</button>
													</>
													: 
	
													<button onClick={() => setPage(page - 1)}>
														<FaChevronLeft/>
													</button>
	
											}
										</>
								}
							</>

					}
				</S.Buttons>
			</S.Container>
		</>
	)
}
