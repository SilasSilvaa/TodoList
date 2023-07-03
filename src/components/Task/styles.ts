import styled from "styled-components"
import { Check, Trash, NotePencil, X } from 'phosphor-react';

interface isChecked {
    ischecked: boolean;
    isEditing: boolean;
}

export const TaskContent = styled.div<isChecked>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    gap: 2rem;
    border-radius: 8px;

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
        transition: background 0.2s ease-out;
        background-color: ${props => props.theme.blue};

        svg{
            display: block;
            color: ${props => props.theme["gray-100"]}
        }
    }

    input[type="checkbox"]+ label:hover {
        transition: background 0.2s ease-out;
        background-color: ${props => props.theme.blue};

        svg{
            display: block;
            color: ${props => props.theme["gray-100"]}
        }
    }

    p{
        flex: 1;
        padding: 0.5rem;
        color: ${props => props.ischecked || props.isEditing ? props.theme["gray-300"] : props.theme["gray-100"]};
        text-decoration: ${props => props.ischecked && 'line-through'} ;
    }
    
    span {
        color: ${props => props.theme["gray-300"]};
    }

    svg{
        cursor: pointer;
        transition: color 0.2s ease-in;
        
        &:hover{
            transition: color 0.2s ease-in;
            color: ${props => props.theme.blue};
        }
    }

    @keyframes addNewTask {
        from{
            transform: translateY(10px);
        }

        to{
            transform: translateY(0);
        }
    }
    
    @keyframes editTask {
        from{
            transform: scale(1);
        }

        to{
            rotate:  scale(1.05);
        }
    }
        
`
// export const SvgEditingTask = styled(NotePencil).attrs((props: isChecked) => {
//     color: states => props.isEditing ? states.themedanger : ''
//     // isEdting: props.
// })`
// `
// export const SvgTrash = styled(Trash)`
//     color: ${props => props.theme.danger};

// `
// export const SvgEditingTask = styled(NotePencil) <isChecked>`
// color: ${props => props.isEditing ? props.theme.danger : ''};

// `