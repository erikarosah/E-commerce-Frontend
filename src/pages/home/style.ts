import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Banner = styled.img`
    width: 100%;
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