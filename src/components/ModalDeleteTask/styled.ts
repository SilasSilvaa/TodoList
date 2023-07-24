import styled from "styled-components";

export const ModalContainer = styled.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.2);

`

export const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    border-radius: 8px;
    background: ${props => props.theme.background};
    border: ${props => props.theme.active} solid 2px ;

    p{
        padding: 2rem;
    }
`

export const ButtonContent = styled.div`
    display: flex;
    padding: 0.5rem;
    border: none;
    gap: 0.5rem;
   
`