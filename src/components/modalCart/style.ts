import styled from 'styled-components'

export const Modal = styled.div<{ openmodal: boolean }>`
    width: 50rem;
    height: auto;
    position: absolute;
    visibility: ${(props) => props.openmodal ? 'visible' : 'hidden'};
    flex-direction: column;
    background-color: #F2F2F2;
    top: 7rem;
    right: 2rem;
    border-radius: 5px;
    padding: 2rem;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > img {
            width: 30px;
            height: auto;
        }

        > p {
            max-width: 120px;
            font-size: 1.2rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    div:not(:last-child) {
        padding-bottom: 2rem;
        border-bottom: 1px solid #E0E0E0;
    }
    
    > button {
        width: 100%;
        padding: 1rem;
        border-radius: 5px;
        color: #E0E0E0;
        background-color: #2B2C2D;
    }

    @media (max-width: 420px) {
      width: 98%;
      right: 0;
    }
`

export const Total = styled.h4`
    align-self: flex-start;
    font-size: 1.2rem;
`
