import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: calc(100vh - 10rem);
    transition: background 1s ease-in-out;
    border-radius: 0 0 8px 8px;

    @keyframes loadingPage{
    
        0%{
            height: 0%;
        }

        100%{
            height: 100vh;
        }
    
    }

    ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.fontColorSecondary};
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.fontColor};
}

    `

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem 1rem 0 0;
    overflow-y: auto;
    overflow-x: none;
    span{
        margin: auto;
    }

`
