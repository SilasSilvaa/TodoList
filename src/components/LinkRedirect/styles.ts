import styled from "styled-components";
import { device } from "../../styles/theme/default";


export const LinkPage = styled.div`
    display: flex;
    padding: 1rem;
    border-radius: 8px;
    background: ${props => props.theme["gray-500"]};
    gap: 1rem;
    z-index: 99;
    a{
        
        font-weight: bold;
        text-decoration: none;
        color: ${props => props.theme["gray-100"]};
        
        &:hover{
            transition: color 0.2s;
            color: ${props => props.theme.blue};
        }

        &.active{
            color: ${props => props.theme.blue};
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

