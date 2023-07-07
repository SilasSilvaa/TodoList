import styled from "styled-components";
import { device } from "../../styles/theme/default";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: calc(100vh - 10rem);

    @media ${device.smartphone} {
        height: 70vh;
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