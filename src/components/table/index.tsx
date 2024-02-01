import { useEffect, useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { ProductProps } from '../../context/homePageContext'
import { instanceAxios } from '../../helper/instanceAxios'
import { LoadingCard } from '../loadingCard'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

import * as S from './style'

export function Table() {
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ loading, setLoading ] = useState(true)
	const [ page, setPage ] = useState(1)

	function FetchAllProducts() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products')
				.then((data) => setData(data.data[0]))
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

	function RemoveProduct(id: string) {
		const controller = new AbortController()
	
		try {
			instanceAxios.delete(`/product/${id}`)
				.then()
				.catch(() => {
					alert('Ocorreu um erro, por favor tente novamente mais tarde')
					window.location.href='/'
				})
			setLoading(false)
			window.location.href='/manager/all'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	useEffect(() => {
		FetchAllProducts()
	},[page])

	if(loading) {
		return (
			<LoadingCard/>
		)
	}
	return (
		<>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Nome</th>
						<th>Tamanhos</th>
						<th>Disponível</th>
						<th>Remover</th>
						<th>Editar</th>
					</tr>
				</thead>
				<tbody>
				
					{
						data.slice((page - 1) * 10, page * 10).map((item) => (
							<>
								<tr key={item.id} >
									<td>
										<img
											src={item.image}
											alt=''
										/>
									</td>
									<td>{item.name}</td>
									<td>{item.sizes.join(',')}</td>
									<td>{String(item.available) === 'true' ?
										<IoCheckmarkSharp/>
										:
										<IoClose/>
									}
									</td>
									<td 
										className='remove-product'
										onClick={() => RemoveProduct(item.id)}
									>
										<IoClose/>
									</td>
									<td onClick={() => window.location.href=`/manager/update/${item.id}`}
										className='icon'
									>
										<FaPencilAlt/>
									</td>
								</tr>
							</>
						))
					}
				</tbody>
			</table>
	
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
		</>
	)
}