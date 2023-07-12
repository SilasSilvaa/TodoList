import styled from "styled-components"
import { device } from "../../styles/theme/default";

import { NotePencil, Trash, X } from 'phosphor-react';


interface TaskStylesProps {
    ischecked?: boolean;
    isEditing?: boolean;
}

export const TaskContent = styled.div<TaskStylesProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    word-break: break-all;
 
    padding: 1rem;
    gap: 2rem;
    border-radius: 8px;

    &:not(:first-child){
        margin-top: 1rem;
    }

    
    p{
        flex: 1;
        transition: color 0.2s ease-in;
        color: ${props => props.ischecked || props.isEditing ? props.theme["gray-300"] : props.theme["gray-100"]};
        text-decoration: ${props => props.ischecked && 'line-through'} ;
    }
    
    span {
        color: ${props => props.theme["gray-300"]};
    }

    animation: addNewTask 0.5s ease-in-out;

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
        
        @media ${device.tablet}{
            
            flex-direction: column;
            align-items: flex-start;
            
        }
`

export const CheckBox = styled.div<TaskStylesProps>`
    label{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 1.25rem;
        height: 1.25rem;
        
        border-radius: 50%;
        border: 2px solid ${props => props.isEditing ? props.theme["gray-300"] : props.theme["gray-100"]};
        
        transition: border 0.2s ease-in;
        
        svg{
            display: none;
        }
    }

    input[type="checkbox"]{
        display: none;
        
    }
    
    
    input[type="checkbox"]:checked + label {
        transition: background 0.2s ease-out;
        background-color: ${props => props.theme.blue};
        border: 2px solid ${props => props.theme.blue};

        svg{
            display: block;
            color: ${props => props.theme["gray-100"]}
        }
    }

    input[type="checkbox"]+ label {
        ${props => !props.isEditing && `
        &:hover {
            border: 2px solid ${props.theme.blue};
            transition: background 0.2s ease-out;
            background: ${props.theme["blue"]};
            
            svg {
                display: block;
                color: ${props.theme["gray-100"]};
            }
        }
        `}
    }

`

export const IconsContent = styled.div<TaskStylesProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    svg{
        cursor: pointer;
        transition: color 0.2s ease-in;
        
        &:hover{
            transition: color 0.2s ease-in;
        }
    }

`

export const TrashIcon = styled(Trash) <TaskStylesProps>`

    color: ${props => props.isEditing ? props.theme["gray-300"] : props.theme["gray-100"]};
    cursor: ${props => props.isEditing && 'not-allowed'};
    pointer-events: ${props => props.isEditing && 'none'};

    &:hover{
        color: ${props => props.isEditing ? '' : props.theme.danger};
    }
`

export const NotePencilIcon = styled(NotePencil) <TaskStylesProps>`
    pointer-events: ${props => props.isEditing && 'none'};
    color: ${props => props.isEditing ? props.theme["gray-300"] : props.theme["gray-100"]};
    display: ${props => props.ischecked && 'none'};
        
    &:hover{
        color: ${props => props.isEditing ? props.theme.danger : props.theme.blue};
    }


`

export const CloseIcon = styled(X) <TaskStylesProps> `
    display: ${props => props.ischecked ? 'none' : 'block'};
        
    &:hover{
        transition: color 0.2s ease-in;
        color: ${props => props.theme.danger};
    }

`