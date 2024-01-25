import * as S from './style'

interface SectionProps {
    img: string,
    name: string,
	price: number,
	old_price?:number
}

export function Card(props: SectionProps) {
	return (
		<S.Container>
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
					
					<span className='old_price'>{props.old_price?? props.old_price}</span>
				</div>
			</S.Content>
		</S.Container>
	)
}
