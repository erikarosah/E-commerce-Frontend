import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > svg {
        fill: green;
        font-size: 15rem;
    }

    > a {
        font-weight: bold;
    }
`