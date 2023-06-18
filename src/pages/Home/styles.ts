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

export const CafeMenu = styled.div`
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

const CIRCLE_COLOR = {
    yellowDark: 'yellowDark',
    brandYellow: 'yellow',
    gray: 'baseText',
    purple: 'purple'

} as const;

interface CircleProps {
    circleColor: keyof typeof CIRCLE_COLOR;
}

export const StyledCircle = styled.div<CircleProps>`
    background: ${props => props.theme[CIRCLE_COLOR[props.circleColor]]};
    color: ${props => props.theme.background};
    padding: 0.5rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`