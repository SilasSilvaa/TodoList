import styled from "styled-components";


export const ContentInput = styled.div`
    
    width: 100%;
    form {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
        
        input {
            flex: 1;
            height: 3rem;
            padding: 0.5rem;
            border-radius: 8px;
            background: ${props => props.theme["gray-500"]};
            border: 0;
            color: ${props => props.theme["gray-100"]}
        }
    }

`

export const SubmitButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 6rem;
    gap: 0.5rem;
    padding: 0.5rem;
    background: ${props => props.theme["blue-dark"]};
    color: ${props => props.theme["gray-100"]};
    
    border: 0;
    border-radius: 8px;
    font-weight:bold;
    
    cursor: pointer;
    
    &:hover{
    transition: background-color 0.2s ease-in;
    background: ${props => props.theme["blue"]};
    }
`