import * as S from './style'
import ImageFemininoMenu from '../../assets/menu-feminino.webp'
import ImageMasculinoMenu from '../../assets/menu-masculino.webp'
import ImageInfantilMenu from '../../assets/menu-infantil.webp'
import ImageJeansMenu from '../../assets/menu-jeans.webp'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import { useDetailPageContext } from '../../context/detailPageContext'

export function MenuMobile() {
	const [ query, setQuery ] = useState('')
	const { 
		openMenu, 
		setOpenMenu
	} = useDetailPageContext()
    
	function HandlePage(e?: React.KeyboardEvent<HTMLElement>) {
		if (!query) {
			return
		}
	
		if (e?.key === 'Enter') {
			window.location.href=`/products/name/${query}`
		}
	}

	function HandlePageOnClick() {
		if (!query) {
			return
		}	
		window.location.href=`/products/name/${query}`
	}
	return (
		<S.MenuMobile modalactive={openMenu}>
			<div>
				{
					localStorage.getItem('user') ?
						<h2>{localStorage.getItem('user')}</h2>
						: 
						<Link to='/session'>Entre ou cadastre-se</Link>
				}
				<div onClick={() => setOpenMenu(!openMenu)}>x</div>
			</div>
			<S.Search>
				<input
					placeholder='Buscar produto'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={HandlePage}
				/>
				<IoSearchOutline
					onClick={HandlePageOnClick}
				/>
			</S.Search>
			<ul>
				<Link to='/products/fem'>
					<li>
						<img
							src={ImageFemininoMenu}
							alt=''
						/>
							Feminino
					</li>
				</Link>
				<Link to='/products/masc'>
					<li>
						<img
							src={ImageMasculinoMenu}
							alt=''
						/>
							Masculino
					</li>
				</Link>
				<Link to='/products/kids'>
					<li>
						<img
							src={ImageInfantilMenu}
							alt=''
						/>
							Infantil
					</li>
				</Link>
				<Link to='/products/name/jeans'>
					<li>
						<img
							src={ImageJeansMenu}
							alt=''
						/>
							Jeans
					</li>
				</Link>
			</ul>
			<p>
					Copyright 2024 &copy; - Developed by Erika Rosa 
				
				<Link to='https://github.com/erikarosah'>
					<FiGithub/> 
				</Link>
				
				<Link to='https://www.linkedin.com/in/erika-rosa-19a4361b1/'>
					<FaLinkedinIn/>
				</Link>
			</p>
		</S.MenuMobile>
	)
}