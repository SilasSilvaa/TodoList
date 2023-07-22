import styled from "styled-components";
import { device } from "../../styles/theme/default";
import { Moon, Sun } from "phosphor-react";


export const LinkPage = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    background: ${props => props.theme["background-secondary"]};
    gap: 1rem;
    z-index: 99;
    a{
        font-weight: bold;
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        
        &:hover{
            transition: color 0.2s;
            color: ${props => props.theme.active};
        }

        &.active{
            color: ${props => props.theme.active};
        }
    }
    
    @media ${device.tablet}{
        
    align-items: center;
    justify-content: center;
    }
    
    @media ${device.smartphone}{
        flex-direction: column;
    }

`

export const SwitchContent = styled.div`
    display: flex ;
    flex: 1;
    height: 25px;
    justify-content: end;
    color: ${props => props.theme.svgColorIcon};
    `

export const SunIcon = styled(Sun)`
    width: 25px;
    height: 25px;
    cursor: pointer;
`

export const MoonIcon = styled(Moon)`
    width: 25px;
    height: 25px;
    cursor: pointer;
`