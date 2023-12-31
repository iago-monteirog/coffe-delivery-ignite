import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import * as S from './styles';
import { useContext } from "react";
import { CoffeeShopContext } from "../../contexts/CoffeeShopContext";

interface CartButtonProps {
    isYellow?: boolean,
    hasCounter?: boolean
}

export function CartButton({ isYellow = false, hasCounter = false }: CartButtonProps) {

    const { cartItems } = useContext(CoffeeShopContext);

    return (
        <S.CartButtonContainer
            cartBackgroundColor={isYellow ? "yellowLight" : "purpleDark"}
            cartColor={isYellow ? "yellowDark" : "white"}
        >
            <NavLink to={cartItems.length ? '/checkout' : '/'} title='Shopping Cart'>
                {cartItems.length > 0 && hasCounter && (
                    <S.ItemCounter>
                        <span>{cartItems.length}</span>
                    </S.ItemCounter>
                )}
                <ShoppingCart size={22} weight='fill' />
            </NavLink>
        </S.CartButtonContainer>
    );
}