import * as S from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { Counter } from '../Counter';
import { useContext } from 'react';
import { CoffeeShopContext } from '../../contexts/CoffeeShopContext';

export function CoffeeCard() {

    const { coffeeList } = useContext(CoffeeShopContext);

    return (
        <S.CoffeeBox>
            <img src={coffeeList[0].img} alt="" />

            <S.Tags>
                {coffeeList[0].tags.map((tag, index) => {
                    return (
                        <S.CoffeeTag key={index}>
                            <span>{tag}</span>
                        </S.CoffeeTag>
                    )
                })}
            </S.Tags>

            <h4>{coffeeList[0].name}</h4>
            <p>{coffeeList[0].description}</p>

            <S.BuyBox>
                <p>R$<strong>{coffeeList[0].price}</strong></p>

                <S.ActionsBox>
                    <Counter
                    />
                    <NavLink to='/checkout'>
                        <ShoppingCart weight='fill' size={22} />
                    </NavLink>
                </S.ActionsBox>
            </S.BuyBox>
        </S.CoffeeBox>
    );
}