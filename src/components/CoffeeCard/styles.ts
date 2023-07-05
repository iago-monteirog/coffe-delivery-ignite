import styled from "styled-components";

export const CoffeeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    width: 14rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;

    background: ${props => props.theme.baseCard};

    h4 {
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        color: ${props => props.theme.baseSubtitle};
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme.baseLabel};
        text-align: center;
    }

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: calc(0px - 1.875rem - 6px);
    }
`;

export const BuyBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    p {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.625rem;
        line-height: 1.3;
        color: ${props => props.theme.baseText};

        strong {
            font-size: 1.5rem;
            font-family: 'Baloo 2';
        }
    }
`;

export const ActionsBox = styled.div`
    display: flex;
    gap: 0.5rem;

    a {
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 8px;

        background: ${props => props.theme.purpleDark};
        border-radius: 6px;
        color: ${props => props.theme.white};
    }
`;

export const Tags = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
`

export const CoffeeTag = styled.div`
    background: ${props => props.theme.yellowLight};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        font-size: 0.625rem;
        font-weight: 700;
        line-height: 1.3;
        color: ${props => props.theme.yellowDark};
        text-transform: uppercase;
}
`
