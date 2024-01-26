import { Header } from '../../components/header'
import * as S from './style'
import BannerImage1 from '../../assets/banner-1-dt.jpg'
import BannerImage2 from '../../assets/banner-2-dt.jpg'
import { Card } from '../../components/card'
import { useEffect, useState } from 'react'
import { useProductsContext } from '../../context/productsContext'
import { Footer } from '../../components/footer'
import { IoSearchOutline } from 'react-icons/io5'
import { FaFilter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LoadingCard } from '../../components/loadingCard'

export function Home() {
	const [ query, setQuery ] = useState('')

	function handlePage(e?: React.KeyboardEvent<HTMLElement>) {
		if (!query) {
			return
		}
	
		if (e?.key === 'Enter') {
			window.location.href=`/products/name/1/${query}`
		}
	}

	function handlePageOnClick() {
		if (!query) {
			return
		}	
		window.location.href=`/products/name/1/${query}`
	}

	const {
		FetchData, 
		popularFemProducts, 
		popularKidsProducts,
		loading
	} =  useProductsContext()

	useEffect(() => {
		FetchData()
	},[])

	if(loading) {
		return(
			<LoadingCard/>
		)
	}

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
						<Link to='/products/name/1/camisa'>
							<S.Items>Camisa</S.Items>
						</Link>
						<Link to='/products/name/1/calça'>
							<S.Items>Calça</S.Items>
						</Link>
						<Link to='/products/name/1/conjunto'>
							<S.Items>Conjunto</S.Items>
						</Link>
						<Link to='/products/name/1/vestido'>
							<S.Items>Vestido</S.Items>
						</Link>
						<Link to='/products/name/1/moletom'>
							<S.Items>Moletom</S.Items>
						</Link>
						<Link to='/products/1'>
							<S.Items className='all-products'>Ver tudo</S.Items>
						</Link>
						<FaFilter/>
					</S.Category>
					<S.Search>
						<input
							placeholder='Buscar produto'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onKeyDown={handlePage}
						/>
						<IoSearchOutline
							onClick={handlePageOnClick}
						/>
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
								id={item.id}
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
								id={item.id}
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
