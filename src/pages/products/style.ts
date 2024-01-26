import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 10vh;

    > h1 {
        padding: 3rem 0 1rem 2rem;
        font-weight: normal;
    }
`

export const Content = styled.div`
    max-width: 100vw;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: center;
    gap: 1rem;
    margin-top: 4rem;
`

export const Filter = styled.div`
    max-width: 100vw;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding-left: 2rem;

    > ul {
        display: flex;
        margin-left: 2rem;
        gap: 2rem;

        > li {
            cursor: pointer;
        }
    }
`