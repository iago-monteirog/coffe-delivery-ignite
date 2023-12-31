import styled from "styled-components";

export const HeaderContainer = styled.header `
    width: 100%;
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-right: 1rem;
    }
`;

export const MapBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.purpleLight};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme.purpleDark};
    font-size: 0.875rem;
`;

