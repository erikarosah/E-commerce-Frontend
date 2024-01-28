import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 10vh;
    height: 90vh;
    width: 95vw;
    display: flex;
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
`

export const Products = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    > h1 {
        font-weight: normal;
    }
`