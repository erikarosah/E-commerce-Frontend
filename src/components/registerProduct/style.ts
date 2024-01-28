import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        width: 50%;
        padding: 1.5rem 1rem;
        border: none;
        border-bottom: 1px solid #2B2C2D;
        margin-bottom: 2rem;
    }

    > button {
        width: 50%;
        padding: 1.5rem 1rem;
        border-radius: 8px;
        background-color: #2B2C2D;
        color: #F2F2F2;

        &:hover {
            color: #61c291;
        }
    }

`