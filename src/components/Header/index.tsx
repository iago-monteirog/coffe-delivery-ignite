import * as S from './styles';
import coffeLogo from '../../assets/logo.svg';
import { MapPin, } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';
import { CartButton } from '../CartButton';

export function Header() {
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

                <CartButton isYellow hasCounter />
            </nav>
        </S.HeaderContainer>
    )
}