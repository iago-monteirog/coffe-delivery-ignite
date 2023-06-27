import * as S from './styles';
import expresso from '../../assets/expresso.png';
import { ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { Counter } from '../Counter';

export function CoffeeCard() {
    return (
        <S.CoffeeBox>
            <img src={expresso} alt="Café Expresso" />

            <S.CoffeeTag> <span>Tradicional</span> </S.CoffeeTag>

            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <S.BuyBox>
                <p>R$<strong>9,90</strong></p>

                <S.ActionsBox>
                    <Counter />
                    <NavLink to='/checkout'>
                        <ShoppingCart weight='fill' size={22} />
                    </NavLink>
                </S.ActionsBox>
            </S.BuyBox>
        </S.CoffeeBox>
    );
}