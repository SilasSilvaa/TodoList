import styled from "styled-components";


export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 70rem;
    height: 35em;
    margin: 2rem auto;
    border-radius: 8px;
`

export const LinkPage = styled.div`
    display: flex;
    flex: 1;
    padding: 1rem;
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