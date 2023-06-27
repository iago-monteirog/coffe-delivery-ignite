import styled from "styled-components";

export const Counter = styled.div`
    background: ${props => props.theme.baseButton};
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme.purple};
        cursor: pointer;
    }
`;