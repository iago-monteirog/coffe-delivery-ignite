import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import * as S from './styles';
import { useContext } from "react";
import { CoffeeShopContext } from "../../contexts/CoffeeShopContext";

interface CartButtonProps {
    isYellow: boolean,
}

export function CartButton({ isYellow }: CartButtonProps) {

    const { cartItems } = useContext(CoffeeShopContext);

    return (
        <S.CartButtonContainer cartBackgroundColor="yellowLight" cartColor="yellowDark">
            <NavLink to='/checkout' title='Shopping Cart'>
                {cartItems.length > 0 && (
                    <S.ItemCounter>
                        <span>{cartItems.length}</span>
                    </S.ItemCounter>
                )}
                <ShoppingCart size={22} weight='fill' />
            </NavLink>
        </S.CartButtonContainer>
    );
}