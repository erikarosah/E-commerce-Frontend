import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    margin-top: 10vh;
    height: 90vh;
    padding: 5rem 20vw;
    display: flex;
    justify-content: space-around;
    gap: 2rem;

    @media (max-width: 835px) {
        height: fit-content;
    }

    @media (max-width: 420px) {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 0 2rem;
    }

`
export const Image = styled.img`
    width: 39rem;
    height: auto;

    @media (max-width: 835px) {
      width: 30rem;
    }

    @media (max-width: 420px) {
      width: 60vw;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > h3 {
        display: flex;
        
        > span {
            margin-left: 5px;
            color: #EF1018
        }

        > svg {
            margin-left: 1rem;
            font-size: 1.8rem;
            cursor: pointer;
        }
    }

    @media (max-width: 420px) {
      gap: 2rem;
      margin-bottom: 2rem;
    }

`
export const Prices = styled.div`
    > h2 {
        padding-bottom: 2rem;
        font-size: 2rem;
    }

    > span {
        padding-right: 1rem;
        font-size: 1.5rem;
        font-weight: bold
    }

    > span:last-child {
        font-size: 1.2rem;
    }
`

export const Sizes = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
    
    > div {
        display: flex;
        gap: 1rem;
    }
`
export const Button = styled.button`
    padding: 1rem;
    background-color: #2B2C2D;
    color: #E0E0E0;
`
export const Freight = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;

    > div {
        margin-top: 2rem;
        display: flex;
        gap: 2rem;

        > input {
            padding: 0 0 1rem 0;
            border: none;
            border-bottom: 1px solid #000;
        }

        input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
        }
        
        input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;
        }

        > button {
            background-color: #2B2C2D;
            color: #E0E0E0;
            padding: .6rem;
        }
    }
`