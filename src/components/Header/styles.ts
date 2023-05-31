import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextHeader = styled.div`
    display: flex;
    margin: 2rem;
`

export const Content = styled.div`
    display: flex;
    gap: 0.5rem;
    input{
        width: 736px;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 8px;
        background: ${props => props.theme["gray-500"]};
        border: 0;
        color: ${props => props.theme["gray-100"]}
    }

`

export const SubmitButton = styled.a`
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