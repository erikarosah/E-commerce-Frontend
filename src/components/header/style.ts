import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > div {
        display: flex;
        gap: 2rem;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    text-transform: uppercase;

    h1 {
        font-family: 'Kalam', sans-serif;
        color: #2B2C2D;
        letter-spacing: 1rem;       
    }
`

export const Section = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

`

export const Items = styled.li`
    font-size: 1.4rem;
    color: #2B2C2D;
    font-weight: 300;
    transition: border ease-in;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    position: relative;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: border .2s ease-in-out;
    
    &:hover {
        border-bottom: 2px solid #EF1018;
    }
`

export const ButtonLogin = styled.button`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    background-color: #2B2C2D;
    color: #E0E0E0;
    transition: transform .1s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`

export const Cart = styled.img`
    width: 40px;
    height: auto;

    cursor: pointer;
    transition: transform .1s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`
