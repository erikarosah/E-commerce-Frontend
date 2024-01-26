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