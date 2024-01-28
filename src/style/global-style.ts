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

    button {
        border: none;
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
        color: #A2A2A2;
        text-decoration: line-through;
    }

    .all-products {
        font-weight: bold;
    }
    
    .active-button{
        background-color: #2B2C2D;
        color: #E0E0E0;
    }

    .active-span{
        visibility: visible;
        font-weight: bold;
        align-self: flex-end;
    }

    .disable-span{
        visibility: hidden;
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

    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 2rem;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2rem 1rem;
        text-align: center;
        font-size: 1.4rem;
        
        > img {
            width: 40px;
            height: auto;
        }
    }

    th {
        background-color: #f2f2f2;
    }

    .remove-product {
        > svg {
            cursor: pointer;

            &:hover {
                fill: red;
            }
        }
    }

    .input-normal,
    .input-erro {
        width: 80%;
        padding: 1.5rem 1rem;
        border-radius: 5px;
        border: none;
        border: 1px solid #2B2C2D;
    }

    .input-normal{
        border: 1px solid #2B2C2D;
    }

    .input-erro {
        border: 2px solid red;
    }
`
