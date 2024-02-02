import { useState } from 'react'
import * as S from './style'

interface sizeProps {
    size: string
}

export function Sizes(props: sizeProps) {
	const [ active, setActive ] = useState(false)

	return (
		<S.Container 
			value={props.size}
			type='button'
			className={active? 'active-button' : ''}
			onClick={() => setActive(!active)}
		/>
	)
}
