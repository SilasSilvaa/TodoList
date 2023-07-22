import styled from "styled-components"
import { device } from "../../styles/theme/default";

import { NotePencil, Trash, X } from 'phosphor-react';


interface TaskStylesProps {
    checked?: boolean;
    editing?: boolean;
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
        color: ${props => props.editing ? props.theme.active : props.theme.fontColor};
        color: ${props => props.checked && props.theme.fontColorSecondary};
        text-decoration: ${props => props.checked && 'line-through'} ;
    }
    
    span {
        margin: 0;
        color: ${props => props.theme.fontColor};
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
    transition: color 0.2s ease-in;

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 1.25rem;
        height: 1.25rem;
        
        border-radius: 50%;
        border: 2px solid ${props => props.editing && props.theme.fontColorSecondary};
        
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
        background-color: ${props => props.theme.active};
        border: 2px solid ${props => props.theme.active};

        svg{
            display: block;
            color: ${props => props.theme.fontColorButton}
        }
    }

    input[type="checkbox"]+ label {
        ${props => !props.editing && `
        &:hover {
            border: 2px solid ${props.theme.active};
            transition: background 0.2s ease-out;
            background: ${props.theme.active};
            
            svg {
                display: block;
                color: ${props.theme.fontColorButton}
            }
        }
        `}
    }

`

export const IconsContent = styled.div`
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

    color: ${props => props.editing && props.theme.fontColorSecondary};
    pointer-events: ${props => props.editing && 'none'};

    &:hover{
        color: ${props => props.editing ? '' : props.theme.hoverDanger};
    }
`

export const NotePencilIcon = styled(NotePencil) <TaskStylesProps>`
    pointer-events: ${props => props.editing && 'none'};
    color: ${props => props.editing && props.theme.fontColorSecondary};
    display: ${props => props.checked && 'none'};
        
    &:hover{
        color: ${props => props.editing ? props.theme.hoverDanger : props.theme.active};
    }


`

export const CloseIcon = styled(X) <TaskStylesProps> `
    display: ${props => props.checked ? 'none' : 'block'};
        
    &:hover{
        transition: color 0.2s ease-in;
        color: ${props => props.theme.hoverDanger};
    }

`