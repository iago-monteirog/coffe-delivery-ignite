import * as S from './styles';
import coffeLogo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <S.HeaderContainer>
            <NavLink to='/' title='Logo'>
                <img src={coffeLogo} alt="" />
            </NavLink>

            <nav>
                <div>
                    <MapPin size={22} weight='fill' />
                    <span>Florianópolis, SC</span>
                </div>

                <NavLink to='/checkout' title='Shopping Cart'>
                    <ShoppingCart size={22} weight='fill' />
                </NavLink>
            </nav>
        </S.HeaderContainer>
    )
}