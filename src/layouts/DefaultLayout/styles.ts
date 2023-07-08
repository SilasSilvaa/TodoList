import styled from "styled-components";
import { device } from "../../styles/theme/default";


export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;


@media ${device.tablet} {
    width: 95vw;
}
`