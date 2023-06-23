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

export const FormBox = styled.div`
    padding: 40px;
    border-radius: 6px;
    background: ${props => props.theme.baseCard};

    .tittle {
        display: flex;
        gap: 8px;
        align-items: center; 
    }
    
   svg {
    color: ${props => props.theme.yellowDark};
   }

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

`;