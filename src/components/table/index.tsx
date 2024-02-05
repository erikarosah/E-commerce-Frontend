import * as S from './style'
import { useEffect, useState } from 'react'
import { LoadingCard } from '../loadingCard'
import { useProductsContext } from '../../context/productsContext'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'

export function Table() {
	const [ page, setPage ] = useState(1)

	const {
		loading,
		allProducts,
		FetchAllProducts,
		RemoveProduct
	} = useProductsContext()
	

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
						allProducts.slice((page - 1) * 10, page * 10).map((item) => (
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
						
					allProducts.length <= 10 ?
						''
						:
						<>
							{
								
								page === 1 && allProducts.length > page * 10 ?
									<button
										onClick={() => setPage(page + 1)}
										className='btn-right'
									>
										<FaChevronRight />
									</button>
									
									: 

									<>
										{
											allProducts.length > page * 10 ?
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