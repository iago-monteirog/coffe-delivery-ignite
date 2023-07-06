import * as S from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { Counter } from '../Counter';
import { CofffeeProps } from '../../pages/Home';

export function CoffeeCard({ nomeCafe, img, descricao, preco, tags }: CofffeeProps) {
    return (
        <S.CoffeeBox>
            <img src={img} alt="" />

            <S.Tags>
                {tags.map((tag, index) => {
                    return (
                        <S.CoffeeTag key={index}>
                            <span>{tag}</span>
                        </S.CoffeeTag>
                    )
                })}
            </S.Tags>

            <h4>{nomeCafe}</h4>
            <p>{descricao}</p>

            <S.BuyBox>
                <p>R$<strong>{preco}</strong></p>

                <S.ActionsBox>
                    <Counter name={nomeCafe} price={preco} />
                    <NavLink to='/checkout'>
                        <ShoppingCart weight='fill' size={22} />
                    </NavLink>
                </S.ActionsBox>
            </S.BuyBox>
        </S.CoffeeBox>
    );
}