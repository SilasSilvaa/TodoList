import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus:not(a){
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.active};
    }

    body{
        background: ${props => props.theme.background};
        color: ${props => props.theme.fontColor};

        -webkit-font-smoothing: antaliased;
    }
    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme.fontColor};
    }

::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
    }
    ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.background};
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme["background-secondary"]};
}


`