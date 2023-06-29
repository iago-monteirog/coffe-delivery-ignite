import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
`

export const HomePresentation = styled.div`
    display: flex;
    margin: 2rem;

    img {
        margin-left: 3.5rem;
    }
`

export const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .first {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
            font-family: 'Baloo 2';
            color: ${props => props.theme.baseTitle};
            font-weight: 800;
            font-size: 3rem;
            line-height: 1.3;  
        }

        p {
            font-size: 1.25rem;
            line-height: 1.3;
        }
    }

    .last {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`


export const StyledTags = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    span {
        font-size: 1rem;
        line-height: 1.3;
    }
    `;

export const CafeMenu = styled.div`
    margin: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    h3 {
        font-family: 'Baloo 2';
        font-size: 2rem;
        line-height: 1.3;
        color: ${props => props.theme.baseSubtitle}
    }

`;

export const CoffeeContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3.375rem;
`