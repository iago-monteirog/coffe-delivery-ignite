import styled from "styled-components";

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
`;