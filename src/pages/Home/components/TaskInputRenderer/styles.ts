import styled from "styled-components";
import { device } from "../../../../styles/theme/default";


export const ContentInput = styled.div`
    width: 100%;
    form {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
        
        input {
            flex: 6;
            height: 3rem;
            padding: 0.5rem;
            border-radius: 8px;
            background: ${props => props.theme["background-secondary"]};
            border: 0;
        }
    }
    
    @media ${device.smartphone}{
        form{
            flex-direction: column;

        }
    }
`