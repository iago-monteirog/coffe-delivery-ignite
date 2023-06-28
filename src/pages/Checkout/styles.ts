import styled from "styled-components";

export const CheckoutContainer = styled.form`
    margin: 2.5rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;  
    align-items: flex-start;

    h3 {
        font-size: 1.125rem;
        font-family: 'Baloo 2';
        line-height: 1.3;
        color: ${props => props.theme.baseTitle}
    }
`;

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const BaseBox = styled.div`
    padding: 40px;
    border-radius: 6px;
    background: ${props => props.theme.baseCard};

    span {
    color: ${props => props.theme.baseSubtitle};
    font-size: 1rem;
    line-height: 1.3;
   }

   p {
    font-size: 0.875em;
    line-height: 1.3;
    margin-top: 2px;
   }

   .tittle {
        display: flex;
        gap: 8px;
        align-items: center; 
    }
`;

export const PaymentBox = styled(BaseBox)`
    .tittle {
        svg {
            color: ${props => props.theme.purple};
        }
    }
`;

export const RadiosContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    gap: 12px;

    label {
        display: flex;
    }

    input[type="radio"] {
        display: none;
    }
`

export const RadioPaymentBox = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
    cursor: pointer;
    border-radius: 6px;
    background: ${props => props.theme.baseButton};

    input[type="radio"]:checked + & {
        border: 1px solid ${props => props.theme.purple};
        background: ${props => props.theme.purpleLight};
    }

    input[type="radio"]:hover + & {
        background: ${props => props.theme.baseHover};
    }

    span {
        font-size: 0.75rem;
        color: ${props => props.theme.baseText};
        line-height: 1.6;
        text-transform: uppercase;
    }
    svg {
        color: ${props => props.theme.purple};
    }
`

export const FormBox = styled(BaseBox)`
   svg {
    color: ${props => props.theme.yellowDark};
   }

   .fields{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 16px;
    margin-top: 2rem;
        #cep{
            grid-row: 1;
            grid-column: 1 / span 3;
            width: 30%;
        }
        #street{
            grid-row: 2;
            grid-column: 1 / span 3;
        }
        #number{
            grid-row: 3;
            grid-column: 1;
        }
        #complement{
            grid-row: 3;
            grid-column: 2 / span 2;
        }
        #district{
            grid-row: 4;
            grid-column: 1;
        }
        #city{
            grid-row: 4;
            grid-column: 2;
        }
        #state{
            grid-row: 4;
            grid-column: 3;
        }
   }
`;

export const StyledInput = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.baseButton};
    background: ${props => props.theme.baseInput};
    
    &::placeholder {
        color: ${props => props.theme.baseLabel};
        font-size: 0.875rem;
    }
`

export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const OrderBox = styled(BaseBox)`
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const StyledCoffeeCard = styled.div`
    display: flex;
    padding: 8px 4px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px
`;

export const Action = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RemoveButton = styled.button`
    display: flex;
    height: 46px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    background: ${props => props.theme.baseButton};
    border-radius: 6px;
    border: none;

    svg {
        color: ${props => props.theme.purple}
    }

    span {
        font-size: 0.75rem;
        line-height: 1.6;
        text-transform: uppercase;
    }
`;

export const Divider = styled.div`
    height: 0px;
    border: 1px solid ${props => props.theme.baseButton};
`;

export const ItensResume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Prices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    text-align: right;
    line-height: 1.3;
`;

export const TotalItensPrice = styled(Prices)`
    color: ${props => props.theme.baseText};
    
    span {
        font-size: 1rem;
    }

    p {
        font-size: 0.875rem;
    }
`;

export const Freight = styled(Prices)`
    span {
            font-size: 1rem;
        }

    p {
        font-size: 0.875rem;
    }
`;

export const Total = styled(Prices)`
    color: ${props => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 700;
`;

export const ConfirmOrderButton = styled.button`
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;

    border-radius: 6px;
    background: ${props => props.theme.yellow};
    border: none;
    transition: 0.2s;

    span{
        color: ${props => props.theme.white};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.6;
        text-transform: uppercase;
    }

    &:hover {
        background: ${props => props.theme.yellowDark};
    }
`;
