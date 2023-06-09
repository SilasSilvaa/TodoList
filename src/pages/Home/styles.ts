import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /* padding: 2rem 0; */
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    overflow-y: auto;
    overflow-x: none;
`



interface isChecked {
    ischecked: true | false
}

export const Task = styled.div<isChecked>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    gap: 2rem;

    width: 70rem;
    height: 4rem;
    
    border-radius: 8px;
    background: ${props => props.theme["gray-500"]};

    &:not(:first-child){
        margin-top: 1rem;
    }

    input[type="checkbox"]{
        display: none;
    }
    label{
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.blue};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg{
            display: none;
        }
    }
    input[type="checkbox"]:checked + label {
        background-color: ${props => props.theme.blue};

        svg{
            display: block;
            color: ${props => props.theme["gray-100"]}
        }
    }

    p{
        flex: 1;
        padding: 0.5rem;
        text-decoration: ${props => props.ischecked ? 'line-through' : 'none'} ;
    }
    span {
        color: ${props => props.theme["gray-300"]};
    }

    svg{
        cursor: pointer;
    }

    svg:hover{
        transition: color 0.2s ease-in;
        color: ${props => props.theme.danger};
    }
`

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