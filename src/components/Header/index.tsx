import * as S from './styles';
import coffeLogo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <S.HeaderContainer>
            <img src={coffeLogo} alt="" />

            <nav>
                <div>
                    <MapPin size={22} weight='fill' />
                    <span>Porto Alegre, RS</span>
                </div>

                <NavLink to='/checkout' title='Shopping Cart'>
                    <ShoppingCart size={22} weight='fill' />
                </NavLink>
            </nav>
        </S.HeaderContainer>
    )
}