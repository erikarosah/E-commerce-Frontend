import styled from 'styled-components'

export const MenuMobile = styled.div<{ modalactive: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    z-index: 1;

    width: ${(props) => (props.modalactive ? '100%' : '0')};
    height: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    padding: 2rem 0;
    transition: transform 0.5s ease;
    transform: ${(props) => (props.modalactive ? 'translateX(0)' : 'translateX(-100vw)')};
   
    > div {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > a {
            font-size: 1.5rem;
            text-transform: uppercase;
        }

        > div {
            font-size: 1.8rem;
            cursor: pointer;
        }
    }

    > ul {
      
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

       > a li {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.4rem;
            border-radius: 10px 10px 0 0;

            > img {
                width: 70%;
                border-radius: 10px 10px 0 0;
                cursor: pointer;
            }
       }
    }

    > p a {
        margin-left: 1rem;
    }
`
export const Search = styled.div`
    width: 90%;
    background-color: #F7F7F7;
    border: 1px solid #E0E0E0;
    border-radius: 10PX;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

   > input {
        width: 100%;
        border: none;  
        font-weight: bold;
        color: #434343;
        background-color: transparent;
    }

    > svg {
        font-size: 1.4rem;
        cursor: pointer;
    }

`