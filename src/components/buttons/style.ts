import styled from 'styled-components'

export const Container = styled.div<{ openmodal: boolean }>`
    display:  ${(props) => props.openmodal ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    width: 40%;
    
    > span {
        font-size: 1.2rem;
    }

    > button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        background-color: #c5c8c4;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > span:first-child {
        margin-right: 2rem;
    }

    @media (max-width: 420px) {
      width: 45%
    }
`