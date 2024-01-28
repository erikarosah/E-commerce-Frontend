import { useEffect, useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { ProductProps } from '../../context/productsContext'
import { instanceAxios } from '../../helper/instanceAxios'
import { LoadingCard } from '../loadingCard'

export function Table() {
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ loading, setLoading ] = useState(true)

	function FetchAllProducts() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/1').then((data) => setData(data.data[0].products))
			setLoading(false)
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	function RemoveProduct(id: string) {
		const controller = new AbortController()
	
		try {
			instanceAxios.delete(`/products/${id}`).then()
			setLoading(false)
			window.location.href='/manager/all'
		} catch (error) {
			console.log(error)
			controller.abort()
		}
	}

	useEffect(() => {
		FetchAllProducts()
	},[])

	if(loading) {
		return <LoadingCard/>
	}
	return (
	
		<table>
			<thead>
				<tr>
					<th></th>
					<th>ID</th>
					<th>Nome</th>
					<th>Tamanhos</th>
					<th>Disponível</th>
					<th>Remover</th>
				</tr>
			</thead>
			<tbody>
				
				{
					data.map((item) => (
						<>
							<tr key={item.id} >
								<td>
									<img
										src={item.image}
										alt=''
									/>
								</td>
								<td>{item.id}</td>
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
							</tr>
						</>
					))
				}
			</tbody>
		</table>
	)
}