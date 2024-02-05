import styled from 'styled-components'
import BannerImage1 from '../../assets/banner-1-dt.jpg'
import BannerImage2 from '../../assets/banner-2-dt.jpg'
import BannerImageMobile1 from '../../assets/banner-1-mb.jpg'
import BannerImageMobile2 from '../../assets/banner-2-mb.jpg'

export const Container = styled.main`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;

    > a {
        align-self: center;
    }

    @media (max-width: 420px) {
        overflow: hidden;
    }
`
export const SearchContainer = styled.div`
    width: 68%;
    margin-top: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    padding: 0 0 1rem 0;
    border-bottom: 1px solid #E0E0E0;

    @media (max-width: 769px) {
        width: fit-content;
        display: flex;
        flex-direction: column-reverse;
        gap: 2rem;
    }
`
export const Category = styled.ul`
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 1rem;
`
export const Items = styled.li`
    margin-right: 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    transition: filter .5s ease;

    &:hover {
        filter: opacity(70%)
    }
`
export const Search = styled.div`
    width: 30rem;
    background-color: #F7F7F7;
    border: 1px solid #E0E0E0;
    border-radius: 10PX;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

   > input {
        width: 100%;
        border: none;  
        font-weight: bold;
        color: #434343;
        background-color: transparent;
    }

    > svg {
        font-size: 1.4rem;
        cursor: pointer;
    }

    @media (max-width: 769px) {
        width: 100%
    }
`

export const Banner = styled.div`
    min-width: 98.7vw;
    height: 80vh;
    margin-top: 10vh;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${BannerImage1});

    
    @media (max-width: 1024px) {
        height: 50vh;
    }

    @media (max-width: 835px) {
        height: 30vh;
        margin-top: 7vh;
    }

    @media (max-width: 800px) {
        height: 60vh;
        background-image: url(${BannerImageMobile1});
    }

`
export const BannerPromotion = styled.div`
    align-self: center;
    width: 76vw;
    height: 55vh;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${BannerImage2});
    margin: 5rem 0;
    
    @media (max-width: 1024px) {
        height: 40vh;
    }

    @media (max-width: 835px) {
        width: 68vw;
        height: 20vh;
    }

    @media (max-width: 800px) {
        height: 50vh;
        background-image: url(${BannerImageMobile2});
    }

    @media (max-width: 769px) {
        height: 60vh;
        background-image: url(${BannerImageMobile2});
    }
`

export const Content = styled.div`
    max-width: 80vw;
    min-width: 80vw;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: center;
    gap: 1rem;
    margin: 5rem 0;
`
export const Title = styled.h2`
    margin-top: 5rem;
    width: fit-content;
    height: fit-content;
    text-transform: uppercase;
    position: relative;
    align-self: center;

    &::after{
        content: '';
        position: absolute;
        width: 50%;
        left: 25%;
        bottom: -10px;
        border: 2px solid red;
    }
   
`