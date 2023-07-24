import styled from "styled-components";

interface ButtonProps {
    colorButton: 'delete' | 'default';
}

export const ButtonComponent = styled.button<ButtonProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    gap: 0.5rem;
    padding: 0.5rem;
    background: ${props => props.colorButton === 'default' ? props.theme.button : props.theme.hoverDanger};
    color: ${props => props.theme.fontColorButton};
    
    border: 0;
    border-radius: 8px;
    font-weight:bold;
    
    cursor: pointer;

    svg{
        width: 25px;
        height: 25px;
    }
    
    &:hover{
    transition: scale 0.2s ease-out;
    background: ${props => props.colorButton === 'delete' ? props.theme.hoverDanger : props.theme.active};
    scale: 1.05;
    }
`