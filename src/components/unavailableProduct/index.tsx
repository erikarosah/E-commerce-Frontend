import { instanceAxios } from '../../helper/instanceAxios'
import { IoClose } from 'react-icons/io5'
import { ProductProps } from '../../context/homePageContext'
import { useEffect, useState } from 'react'
import { LoadingCard } from '../loadingCard'
import { FaPencilAlt } from 'react-icons/fa'

export function UnavailableProduct() {
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ loading, setLoading ] = useState(true)
	
	function FetchUnavailableProducts() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/unavailables')
				.then((data) => setData(data.data[0]))
				.catch((erro) => console.log(erro))
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
				.catch()
			setLoading(false)
			window.location.href='/manager/all'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

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
				Array.isArray(data) ?
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
								data.map((item) => (
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
