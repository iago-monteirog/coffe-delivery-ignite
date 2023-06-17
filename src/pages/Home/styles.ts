import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
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

    div:first-child {
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
`

export const CafeMenu = styled.div`
`

export const StyledTags = styled.div``