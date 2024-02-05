import * as S from './style'
import LogoImage from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { CiFacebook } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'

export function Footer(){
	return(
		<S.Container>
			<S.Logo>
				<img
					src={LogoImage}
					alt=''
				/>
				<h2>Be you</h2>
			</S.Logo>
			<S.About>
				<S.Items>Empresa</S.Items>
				<S.Items>Produtos</S.Items>
				<S.Items>Sobre</S.Items>
				<S.Items>Contatos</S.Items>
			</S.About>
			<S.SocialMedias>
				<FaInstagram/>
				<CiFacebook/>
				<FaWhatsapp/>
			</S.SocialMedias>
			<p>
				Copyright 2024 &copy; - Developed by Erika Rosa 
				
				<Link to='https://github.com/erikarosah'>
					<FiGithub/> 
				</Link>
				
				<Link to='https://www.linkedin.com/in/erika-rosa-19a4361b1/'>
					<FaLinkedinIn/>
				</Link>
			</p>
		</S.Container>
	)
}