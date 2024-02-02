import { IoClose } from 'react-icons/io5'
import { useProductsContext } from '../../context/productsContext'
import { useEffect } from 'react'
import { LoadingCard } from '../loadingCard'
import { FaPencilAlt } from 'react-icons/fa'

export function UnavailableProduct() {
	const {
		loading,
		unavailableProducts,
		RemoveProduct,
		FetchUnavailableProducts
	} = useProductsContext()

	useEffect(() => {
		FetchUnavailableProducts()
	},[])

	if(loading) {
		return (
			<LoadingCard/>
		)
	}
	return(
		<>
		
			{
				Array.isArray(unavailableProducts) ?
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
								unavailableProducts.map((item) => (
									<>
										<tr
											key={item.id}
										>
											<td>
												<img
													src={item.image}
													alt=''
												/>
											</td>
											<td>{item.name}</td>
											<td>{item.sizes.join(',')}</td>
											<td>
												<IoClose/>
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
					:
					<h3>Não há produtos sem estoque</h3>
			}
		</>
	)
}
