import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 10vh;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #E0E0E0;
    background-color: #FFFFFF;

    > div {
        display: flex;
        align-items: center;
        gap: 2rem;
        color: #2B2C2D;
        font-weight: bold;

        > h3 {
            font-size: 1.4rem;

            > span {
                cursor: pointer;
                transition: color .2s;
                
                &:hover {
                    color: #EF1018;
                }
            }
        }

        > a svg {
            font-size: 1.5rem;
            cursor: pointer;
        }
    }

    > svg {
        display: none;
    }

    @media (max-width: 1024px) {
      height: 80px;
    }

    @media (max-width: 688px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      
      > svg {
            display: flex;
            font-size: 2rem;
            cursor: pointer;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    text-transform: uppercase;

    > h1 {
        font-family: 'Kalam', sans-serif;
        color: #2B2C2D;
        letter-spacing: 1rem;       
    }

    @media (max-width: 800px) {
    > h1 {
        font-size: 1.2rem;
      }
    }
`

export const Section = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 688px) {
      display: none;
    }
`

export const Items = styled.li`
    font-size: 1.4rem;
    color: #2B2C2D;
    cursor: pointer;
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
