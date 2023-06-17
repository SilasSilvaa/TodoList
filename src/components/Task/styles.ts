import styled from "styled-components"

interface isChecked {
    ischecked: true | false
}

export const TaskContent = styled.div<isChecked>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    gap: 2rem;
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
        color: ${props => props.ischecked ? props.theme["gray-300"] : props.theme["gray-100"]};
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
