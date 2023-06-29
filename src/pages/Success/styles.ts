import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 5rem 10rem;

    h3 {
        color: ${props => props.theme.yellowDark};
        font-size: 2rem;
        font-family: 'Baloo 2';
        line-height: 1.3;
    }
`;

export const OrderInfo = styled.div`
    margin-top: 40px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    border-radius: 6px 32pxs ;
`;