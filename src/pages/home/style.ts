import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const SearchContainer = styled.div`
    width: 68%;
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    padding: 0 0 1rem 0;
    border-bottom: 1px solid #E0E0E0;
`
export const Category = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
`
export const Items = styled.li`
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
        border: none;  
        font-weight: bold;
    }

    > svg {
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export const Banner = styled.img`
    width: 100%;
    margin-top: 10vh;
    height: 80vh;
    cursor: pointer;
`
export const BannerPromotion = styled.img`
    align-self: center;
    width: 67vw;
    height: auto;
    cursor: pointer;
`

export const Content = styled.div`
    max-width: 68vw;
    min-height: 75vh;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: center;
    gap: 1rem;
    margin-top: 4rem;
`
export const Title = styled.h2`
    margin-top: 10vh;
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