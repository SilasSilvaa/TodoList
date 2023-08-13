import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100vw;
    height: 100vh;

    h1{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    
    a{
        text-decoration: none;
    }
`

export const SvgContent = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    width: 100vw;

    svg{
        min-width: 18rem;
        max-width: 31rem;
    }
`