import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 10vh;
    height: 90vh;
    width: 95vw;
    display: flex;

    @media (max-width: 834px) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
`

export const SideMenu = styled.aside`
    width: 20vw;
    height: 100%;
    padding: 0 2rem 2rem 2rem;
    border-right: 1px solid #E0E0E0;

    > ul {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        
        > a {
            margin-bottom: 2rem;
            font-size: 1.4rem;
            cursor: pointer;
            padding: 1rem;
            border-radius: 5px;
            
            &:hover {
                background-color: #E3E3E3;
            }
        }
    }

    @media (max-width: 834px) {
        width: 100%;

        > ul {
            display: flex;
            justify-content: center;
            flex-direction: row;
        }
    }

    @media (max-width: 420px) {
      > ul {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
`

export const Products = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    > h1 {
        font-weight: normal;
    }

    @media (max-width: 834px) {
       text-align: center;
    }
`