import * as S from './styles';
import coffeLogo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';

export function Header() {
    const { cartItems } = useContext(CoffeeShopContext);

    return (
        <S.HeaderContainer>
            <NavLink to='/' title='Logo'>
                <img src={coffeLogo} alt="" />
            </NavLink>

            <nav>
                <S.MapBox>
                    <MapPin size={22} weight='fill' />
                    <span>Florianópolis, SC</span>
                </S.MapBox>

                <NavLink to='/checkout' title='Shopping Cart'>
                    {cartItems.length > 0 && (
                        <S.ItemCounter>
                            <span>{cartItems.length}</span>
                        </S.ItemCounter>
                    )}
                    <ShoppingCart size={22} weight='fill' />
                </NavLink>
            </nav>
        </S.HeaderContainer>
    )
}