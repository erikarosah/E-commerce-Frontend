import styled from 'styled-components'

export const Container = styled.main`
    width: 23rem;
    max-height: 35rem;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: transform .2s ease-in-out;
  
    &:hover {
        transform: scale(1.01);
    }

    > img {
        max-width: 23rem;
        min-width: 23rem;
        height: 90%;
    }
`
export const Content = styled.div`
    max-width: 23rem;
    min-height: 4.5rem;
    max-height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;
    gap: .5rem;

    > p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 1px;
    }

    div {
        display: flex;
        gap: 1rem;
        padding-left: 1px;

        > span:first-child {
            font-size: 1.2rem;
        }
    }
`