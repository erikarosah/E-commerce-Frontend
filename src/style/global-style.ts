import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", sans-serif;
    }

    body{
        background-color: #FFFFFF;
        -webkit-font-smoothing: antialiased
    }

    body, input, button, textarea{
        outline: none;
    }

    button, a{
        cursor: pointer;
        transition: 0.2s;
    }

    a{
        text-decoration: none;
        color: #434343;
    }

    h2 {
        color: #191919;
        font-size: 2.4rem;
    }

    h3 {
        color: #333333;
        font-size: 1.4rem;
    }

    .old_price {
        color: #C4C4C4;
        text-decoration: line-through;
    }

    .all-products {
        font-weight: bold;
    }
 
    .c-loader {
        border: 6px solid #e5e5e5;
        border-top-color: #2B2C2D;
        height: 50px;
        width: 50px;
    }

    .c-loader {
        animation: is-rotating 1s infinite;
        border: 6px solid #e5e5e5;
        border-radius: 50%;
        border-top-color: #2B2C2D;
        height: 50px;
        width: 50px;
    }

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }

`
