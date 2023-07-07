import styled from "styled-components";
import { device } from "../../styles/theme/default";



export const TextHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;

@media ${device.tablet}{
    display: flex;
    justify-content: center;
    margin: 1rem 0;
}
`