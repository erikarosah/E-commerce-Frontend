import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    > a {
        cursor: pointer;
        font-size: 1.4rem;
    }

    @media (max-width: 420px) {
        text-align: center;
    }
    
`