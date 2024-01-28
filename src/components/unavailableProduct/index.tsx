import { instanceAxios } from '../../helper/instanceAxios'
import { IoClose } from 'react-icons/io5'
import { ProductProps } from '../../context/productsContext'
import { useEffect, useState } from 'react'
import { LoadingCard } from '../loadingCard'
export function UnavailableProduct() {
	const [ data, setData ] = useState<ProductProps[]>([])
	const [ loading, setLoading ] = useState(true)
	
	function FetchUnavailableProducts() {
		const controller = new AbortController()
	
		try {
			instanceAxios.get('/products/unavailables')
				.then((data) => setData(data.data[0].products))
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

	useEffect(() => {
		FetchUnavailableProducts()
	},[])

	if(loading) {
		return <LoadingCard/>
	}
	return(
		<table>
			<thead>
				<tr>
					<th></th>
					<th>ID</th>
					<th>Nome</th>
					<th>Tamanhos</th>
					<th>Disponível</th>
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
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.sizes.join(',')}</td>
								<td className='remove-product'>
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
