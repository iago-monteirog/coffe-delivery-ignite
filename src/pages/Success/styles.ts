import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    gap: 102px;
    align-items: end;
    margin: 5rem;

    h3 {
        color: ${props => props.theme.yellowDark};
        font-size: 2rem;
        font-family: 'Baloo 2';
        line-height: 1.3;
    }
`;

export const ConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const OrderInfo = styled.div`
    margin-top: 40px;
    padding: 40px;  
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 36px;
        border-top-right-radius: 36px;
        border-bottom-right-radius: 6px;
        border: 1px solid transparent;
        background: linear-gradient(45deg,#DBAC2C, #8047F8) border-box; 
        -webkit-mask: 
         linear-gradient(#fff 0 0) padding-box, 
         linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor; 
              mask-composite: exclude; 
    }

`;

export const Row = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;

`;