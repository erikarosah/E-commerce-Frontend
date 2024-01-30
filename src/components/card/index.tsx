import * as S from './style'

interface SectionProps {
	id: string,
    img: string,
    name: string,
	price: number,
	old_price: number
}

export function Card(props: SectionProps) {
	function handlePage(id: string) {
		window.location.href=`/product/${id}`
	}

	return (
		<S.Container onClick={() => handlePage(props.id)}>
			<img
				src={props.img}
				alt=''
			/>
			<S.Content>
				<p>{props.name}</p>
				<div>
					<span>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(props.price)}
					</span>
					
					<span className='old_price'>
						{props.old_price.toFixed(2).toString().replace('.', ',')}
					</span>
				</div>
			</S.Content>
		</S.Container>
	)
}
