import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > h3 {
        padding: 2rem 0;
    }

    > input {
        width: 50%;
        padding: 1.5rem 1rem;
        border: none;
        border-radius: 0;
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

    @media (max-width: 834px) {
        display: flex;
        align-items: center;
       
        > h3 {
          padding: 0;
        }

        
        > input {
            width: 80vw;
        }

        > button {
            width: 80vw;
        }
    }

`