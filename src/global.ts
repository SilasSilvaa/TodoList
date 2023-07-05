import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus:not(a){
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.blue};
    }

    body{
        background: ${props => props.theme["gray-600"]};
        color: ${props => props.theme["gray-100"]};

        -webkit-font-smoothing: antaliased;
    }
    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

::-webkit-scrollbar {
  width: 8px;
  border-radius: 8px;
}

::-webkit-scrollbar-track {
  background-color: #1A1A1A;
}

::-webkit-scrollbar-thumb {
  background-color: #262626;
  border-radius: 8px;
}

scrollbar {
  width: 8px;
  border-radius: 8px;
  margin-top: 1rem;
}

scrollbar[orient="vertical"] {
  background-color: #1A1A1A;
}

scrollbar-thumb {
  background-color: #262626;
  border-radius: 8px;
}

`