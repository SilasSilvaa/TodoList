import styled from "styled-components";


export const LinkPage = styled.div`
    display: flex;
    /* width: 75vw; */
    height: 3rem;

    padding: 1rem;
    /* margin: 2rem 0; */
    border-radius: 8px;
    background: ${props => props.theme["gray-500"]};
    gap: 1rem;
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
`