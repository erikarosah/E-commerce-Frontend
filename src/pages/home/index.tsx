import { Header } from '../../components/header'
import * as S from './style'
import BannerImage1 from '../../assets/banner-1-dt.jpg'
import BannerImage2 from '../../assets/banner-2-dt.jpg'
import { Card } from '../../components/card'
import { useEffect } from 'react'
import { useProductsContext } from '../../context/productsContext'
import { Footer } from '../../components/footer'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export function Home() {
	const {
		FetchData, 
		popularFemProducts, 
		popularKidsProducts
	} =  useProductsContext()

	useEffect(() => {
		FetchData()
	},[])
	return (
		<>
			<Header/>
			<S.Container>
				<S.Banner
					src={BannerImage1}
					alt='banner'
				/>
				<S.SearchContainer>
					<S.Category>
						<S.Items>Camisas</S.Items>
						<S.Items>Calças</S.Items>
						<S.Items>Conjuntos</S.Items>
						<S.Items>Vestidos</S.Items>
						<S.Items>Kids</S.Items>
						<S.Items className='all-products'>Ver tudo</S.Items>
					</S.Category>
					<S.Search>
						<input
							placeholder='Buscar produto'
						/>
						<IoSearchOutline/>
					</S.Search>
					
				</S.SearchContainer>
				<S.Title>	
					Popular em Feminino
				</S.Title>
				<S.Content>	
					{
						popularFemProducts.slice(1, 5).map((item, index) => (
							<Card
								key={index}
								name={item.name}
								img={item.image}
								price={item.price}
								old_price={item.old_price}
							/>
						))
					} 
				</S.Content>
				<S.BannerPromotion
					src={BannerImage2}
					alt=''
				/>
				<S.Title>	
					Novas coleções
				</S.Title>
				<S.Content>	
					{
						popularKidsProducts.slice(0, 8).map((item, index) => (
							<Card
								key={index}
								name={item.name}
								img={item.image}
								price={item.price}
								old_price={item.old_price}
							/>
						))
					} 
				</S.Content>
				<Footer/>
			</S.Container>
		</>
	)
}
