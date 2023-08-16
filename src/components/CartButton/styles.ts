import styled from "styled-components";

const CART_BACKGROUND_COLOR = {
    yellowLight: 'yellowLight',
    purpleDark: 'purpleDark',
} as const;

const CART_COLOR = {
    yellowDark: 'yellowDark',
    white: 'white',
} as const;

interface CartColorProps {
    cartColor: keyof typeof CART_COLOR
}

interface CartBackgroundProps {
    cartBackgroundColor: keyof typeof CART_BACKGROUND_COLOR;
}

export const CartButtonContainer = styled.div<CartBackgroundProps & CartColorProps>`
    a{
            background: ${props => props.theme[CART_BACKGROUND_COLOR[props.cartBackgroundColor]]};
            color: ${props => props.theme[CART_COLOR[props.cartColor]]};
            padding: 0.5rem;
            padding: 0.5rem;
            border-radius: 6px;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
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
`;