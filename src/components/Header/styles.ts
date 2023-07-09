import styled from "styled-components";
import { device } from "../../styles/theme/default";



export const TextHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;

    a{
        text-decoration: none;
        color: ${props => props.theme["gray-100"]};
        font-size: 2rem;
        font-weight: bold;
        
        &:hover{
            cursor: pointer;
            transition: color 0.2s;
            color: ${props => props.theme.blue};
        }
    }

    svg{
        color: ${props => props.theme.blue};
    }
    
     

@media ${device.tablet}{
    display: flex;
    justify-content: center;
    margin: 1rem 0;
}
`