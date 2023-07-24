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

        a{
            background: ${props => props.theme.yellowLight};
            color: ${props => props.theme.yellowDark};
            padding: 0.5rem;
            border-radius: 6px;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
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

export const ItemCounter = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 55px;
    top: 35px;

    border-radius: 50%;
    background: ${props => props.theme.yellowDark};

    span {
        color: ${props => props.theme.white};
        text-align: center;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.72px;
    }
`