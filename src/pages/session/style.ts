import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2B2C2D;
`
export const Content = styled.form`
    width: 40vw;
    min-height: 48rem;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: #ffffff;

    > h2 {
        margin-top: 3rem;
        width: 80%;
        font-size: 2rem;
        letter-spacing: 2px;
    }

    > h3 {
        padding-left: 5.5rem;
        align-self: flex-start;
        color: red;
    }

    > span {
        width: fit-content;
        padding: 3rem 0 2rem 0;
        display: flex;
        gap: 2px;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: bold;
    }

    > button {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 1rem;
        border-radius: 5px;
        color: #F2F2F2;
        background-color: #2B2C2D;

        &:hover {
            color: #61c291;
        }
    }
`

export const Buttons = styled.div`
    margin-top: 2rem;
    width: 80%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    
    > button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 1rem;
        border-radius: 5px;
        color: #F2F2F2;
        background-color: #2B2C2D;

        &:hover {
            color: #61c291;
        }
    }

`